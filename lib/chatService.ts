import { 
  collection, 
  addDoc, 
  query, 
  where, 
  orderBy, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from './firebase';

export interface ChatMessage {
  id?: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatSession {
  id?: string;
  userId: string;
  title: string;
  messages: ChatMessage[];
  createdAt: Date;
  updatedAt: Date;
}

// Create a new chat session
export const createChatSession = async (userId: string, title: string = 'New Chat'): Promise<ChatSession> => {
  try {
    const now = new Date();
    const sessionData = {
      userId,
      title,
      messages: [],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, 'chatSessions'), sessionData);
    return { 
      id: docRef.id, 
      userId,
      title,
      messages: [],
      createdAt: now,
      updatedAt: now,
    };
  } catch (error) {
    console.error('Error creating chat session:', error);
    throw error;
  }
};

// Get all chat sessions for a user
export const getUserChatSessions = async (userId: string) => {
  try {
    const q = query(
      collection(db, 'chatSessions'),
      where('userId', '==', userId),
      orderBy('updatedAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const sessions: ChatSession[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      sessions.push({
        id: doc.id,
        userId: data.userId,
        title: data.title,
        messages: data.messages || [],
        createdAt: data.createdAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate() || new Date(),
      });
    });
    
    return sessions;
  } catch (error) {
    console.error('Error getting chat sessions:', error);
    throw error;
  }
};

// Get a specific chat session
export const getChatSession = async (sessionId: string) => {
  try {
    const docSnap = await getDocs(collection(db, 'chatSessions'));
    
    // Find the document with matching sessionId
    const targetDoc = docSnap.docs.find(doc => doc.id === sessionId);
    
    if (targetDoc) {
      const data = targetDoc.data();
      return {
        id: targetDoc.id,
        userId: data.userId,
        title: data.title,
        messages: data.messages || [],
        createdAt: data.createdAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate() || new Date(),
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error getting chat session:', error);
    throw error;
  }
};

// Add a message to a chat session
export const addMessageToSession = async (sessionId: string, message: ChatMessage) => {
  try {
    const session = await getChatSession(sessionId);
    if (!session) throw new Error('Chat session not found');
    
    const updatedMessages = [...session.messages, message];
    
    await updateDoc(doc(db, 'chatSessions', sessionId), {
      messages: updatedMessages,
      updatedAt: serverTimestamp(),
    });
    
    return updatedMessages;
  } catch (error) {
    console.error('Error adding message to session:', error);
    throw error;
  }
};

// Update chat session title
export const updateChatSessionTitle = async (sessionId: string, title: string) => {
  try {
    await updateDoc(doc(db, 'chatSessions', sessionId), {
      title,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error updating chat session title:', error);
    throw error;
  }
};

// Delete a chat session
export const deleteChatSession = async (sessionId: string) => {
  try {
    await deleteDoc(doc(db, 'chatSessions', sessionId));
  } catch (error) {
    console.error('Error deleting chat session:', error);
    throw error;
  }
}; 