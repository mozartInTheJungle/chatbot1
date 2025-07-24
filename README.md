# DeepSeek AI Chatbot

A modern, responsive AI chatbot built with Next.js 15 and powered by the DeepSeek API. Features a beautiful, Apple/Google-inspired design with rich markdown support for AI responses.

## Features

- 🤖 **DeepSeek API Integration** - Advanced AI responses with conversation context
- 🎨 **Modern UI/UX** - Apple/Google-level design aesthetics with glass morphism
- 📝 **Rich Markdown Support** - Beautiful rendering of code, tables, lists, and more
- 💬 **Multi-Round Conversations** - Maintains conversation context across messages
- 🌙 **Dark Mode Support** - Automatic dark/light theme switching
- 📱 **Responsive Design** - Works perfectly on desktop and mobile
- ⚡ **Fast Performance** - Optimized Next.js 15 with modern React features
- 🔐 **User Authentication** - Firebase authentication with email/password and Google OAuth
- 💾 **Chat History** - Persistent chat sessions with Firestore database

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: Tailwind CSS 3.4.17
- **AI Provider**: DeepSeek API
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Markdown**: react-markdown with remark-gfm
- **Icons**: Heroicons (SVG)
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- DeepSeek API key
- Firebase project

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chatbot
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Create .env.local file with your API keys
DEEPSEEK_API_KEY=your_api_key_here

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## API Routes

- `POST /api/chat` - Send messages to the AI chatbot
  - Body: `{ messages: [{ role: 'user', content: 'message' }] }`
  - Response: `{ message: 'AI response', usage: {...} }`

## Project Structure

```
chatbot/
├── app/
│   ├── api/chat/route.ts      # DeepSeek API integration
│   ├── layout.tsx             # Root layout with fonts
│   ├── page.tsx               # Main chat interface
│   └── globals.css            # Global styles
├── components/
│   ├── LoginForm.tsx          # Authentication forms
│   └── ChatHistory.tsx        # Chat history sidebar
├── contexts/
│   └── AuthContext.tsx        # Firebase authentication context
├── lib/
│   ├── firebase.ts            # Firebase configuration
│   └── chatService.ts         # Firestore operations
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind configuration
└── package.json              # Dependencies
```

## Features in Detail

### Authentication
- Email/password sign up and sign in
- Google OAuth integration
- Protected routes and user sessions
- Secure token management

### Chat Interface
- Clean, modern chat bubbles with proper alignment
- User and AI avatars with distinct styling
- Typing indicators with animated dots
- Timestamp display for each message
- Auto-scroll to latest messages

### Chat History
- Persistent chat sessions stored in Firestore
- Sidebar with chat history navigation
- Edit and delete chat sessions
- Real-time updates

### Markdown Rendering
- **Headers** (H1, H2, H3) with proper styling
- **Code blocks** with syntax highlighting
- **Inline code** with background highlighting
- **Lists** (ordered and unordered)
- **Tables** with responsive design
- **Blockquotes** with left border styling
- **Links** with external opening
- **Bold** and *italic* text formatting

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## Customization

### Styling
Edit `app/globals.css` and `tailwind.config.js` to customize colors, fonts, and spacing.

### AI Behavior
Modify the system prompt in `app/api/chat/route.ts` to change AI personality and behavior.

### UI Components
Update `app/page.tsx` to modify the chat interface, add new features, or change layouts.

## Troubleshooting

### Common Issues

1. **Module resolution errors**: Clear cache and rebuild
```bash
rm -rf .next node_modules package-lock.json
npm install
```

2. **API errors**: Check your DeepSeek API key in environment variables

3. **Build errors**: Ensure all TypeScript types are correct

4. **Firebase errors**: Verify Firebase configuration and security rules

### Performance Optimization

- Use `npm run build` to check bundle sizes
- Monitor API response times
- Optimize images in the `public/` directory

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize Firebase: `firebase init`
3. Build and deploy: `npm run build && firebase deploy`

## Security

- All API keys are stored in environment variables
- Firebase security rules protect user data
- Authentication tokens are managed securely
- No sensitive data is exposed in client-side code
