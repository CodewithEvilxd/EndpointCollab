# ⚡ EndpointCollab

**A Collaborative API Testing & Development Platform**

EndpointCollab is a modern, full-stack web application designed for teams to collaboratively test, debug, and manage API requests. Built with Next.js 15, it provides a Postman-like experience with advanced features including AI-powered request generation, real-time collaboration, and comprehensive workspace management.

![EndpointCollab](https://img.shields.io/badge/EndpointCollab-v1.0.0-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square)
![Prisma](https://img.shields.io/badge/Prisma-6.16.3-green?style=flat-square)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue?style=flat-square)

## ✨ Features

### 🔐 **Authentication & User Management**
- **OAuth Integration**: Secure login with GitHub and Google accounts
- **Session Management**: Server-side authentication using Better Auth
- **User Profiles**: Complete user management with avatar support

### 🏢 **Workspace & Team Collaboration**
- **Multi-workspace Support**: Create and manage multiple workspaces
- **Team Invitations**: Invite team members via email links
- **Role-based Access**: Admin, Editor, and Viewer roles for granular permissions
- **Real-time Collaboration**: Live updates and shared workspaces

### 🚀 **API Request Management**
- **Request Collections**: Organize API requests into hierarchical collections
- **Multiple HTTP Methods**: Support for GET, POST, PUT, PATCH, DELETE, and more
- **Request History**: Track and replay previous API calls
- **Advanced Editor**: Monaco Editor integration for request body editing
- **Keyboard Shortcuts**: Efficient workflow with hotkeys (Ctrl+G for new request, Ctrl+S for save)

### 🤖 **AI-Powered Features**
- **Smart Request Naming**: AI-generated meaningful names for API requests
- **JSON Body Generation**: Automatic JSON structure creation based on natural language prompts
- **Intelligent Suggestions**: Context-aware recommendations for API development

### 🎨 **Modern UI/UX**
- **Dark Theme**: Beautiful dark interface optimized for developer productivity
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Intuitive Interface**: Clean, Postman-inspired design with collapsible panels
- **Real-time Feedback**: Toast notifications and loading states

### 🛠 **Developer Experience**
- **TypeScript**: Full type safety throughout the application
- **Hot Reload**: Fast development with Next.js Turbopack
- **ESLint**: Code quality enforcement
- **Modular Architecture**: Well-organized, scalable codebase

---

## 🏗️ Architecture Overview

### **Frontend Architecture**
```
src/
├── app/                 # Next.js App Router pages & API routes
│   ├── (auth)/         # Authentication pages (sign-in)
│   ├── (workspace)/    # Main workspace pages
│   ├── api/            # Server-side API endpoints
│   └── globals.css     # Global styles
├── components/         # Reusable UI components
│   ├── ui/            # Shadcn/ui component library
│   └── theme-provider.tsx
├── lib/               # Core utilities and configurations
│   ├── auth.ts        # Better Auth configuration
│   ├── db.ts          # Prisma client instance
│   ├── env.ts         # Environment variables validation
│   └── ai-agents.ts   # AI service integrations
└── modules/           # Feature modules
    ├── ai/            # AI-powered features
    ├── authentication/# User management
    ├── collection/    # API collection management
    ├── invites/       # Team invitation system
    ├── layout/        # Header, sidebar, navigation
    ├── realtime/      # WebSocket connections
    ├── request/       # API request handling
    └── workspace/     # Workspace management
```

### **Backend Architecture**
- **API Routes**: Server-side endpoints in `src/app/api/`
- **Database Layer**: Prisma ORM with PostgreSQL
- **Authentication**: Better Auth with OAuth providers
- **AI Integration**: Google Gemini API for intelligent features
- **File Storage**: Local file system (extensible to cloud storage)

### **Data Flow**
```
Client Request → Next.js API Route → Prisma Client → PostgreSQL
                      ↓
              Better Auth (Sessions)
                      ↓
              AI Services (Google Gemini)
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 18.18.0 or higher
- **PostgreSQL**: Version 15 or higher (or Neon cloud database)
- **Git**: For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CodewithEvilxd/EndpointCollab.git
   cd EndpointCollab
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env  # Copy environment template
   ```

   Configure your `.env` file with the following variables:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/endpointcollab"
   POSTGRES_USER=your_db_user
   POSTGRES_PASSWORD=your_db_password
   POSTGRES_DB=endpointcollab

   # OAuth Providers
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret

   # AI Features
   GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key
   ```

### Database Setup

1. **Using Docker (Local Development)**
   ```bash
   docker-compose up -d
   ```

2. **Using Prisma**
   ```bash
   # Generate Prisma client
   npx prisma generate

   # Push schema to database
   npx prisma db push
   ```

### Development

1. **Start development server**
   ```bash
   npm run dev
   ```

2. **Open your browser**
   ```
   http://localhost:3000
   ```

### Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

---

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | ✅ |
| `GITHUB_CLIENT_ID` | GitHub OAuth client ID | ✅ |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth client secret | ✅ |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | ✅ |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | ✅ |
| `GOOGLE_GENERATIVE_AI_API_KEY` | Google Gemini API key | ✅ |

### OAuth Setup

#### GitHub OAuth
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set Authorization callback URL to: `http://localhost:3000/api/auth/callback/github`
4. Copy Client ID and Client Secret to your `.env` file

#### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Set authorized redirect URIs to: `http://localhost:3000/api/auth/callback/google`
6. Copy Client ID and Client Secret to your `.env` file

### AI Features Setup

1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Create a new API key
3. Copy the API key to `GOOGLE_GENERATIVE_AI_API_KEY` in your `.env` file

---

## 📖 Usage Guide

### Creating Your First Workspace

1. **Sign In**: Use GitHub or Google OAuth to authenticate
2. **Create Workspace**: Click on "Create Workspace" in the header
3. **Invite Team Members**: Use the invite feature to add collaborators
4. **Set Permissions**: Assign Admin, Editor, or Viewer roles

### Making API Requests

1. **New Request**: Press `Ctrl+G` or click the "New Request" button
2. **Configure Request**:
   - Select HTTP method (GET, POST, PUT, etc.)
   - Enter API endpoint URL
   - Add headers, parameters, and request body
3. **AI Assistance**:
   - Use "Suggest Name" for intelligent request naming
   - Use "Generate JSON" for automatic body creation
4. **Save Request**: Press `Ctrl+S` to save to a collection

### Organizing with Collections

1. **Create Collection**: Right-click in the sidebar to create collections
2. **Add Requests**: Drag and drop requests into collections
3. **Nested Structure**: Create sub-collections for better organization
4. **Share Collections**: Collaborate with team members on collections

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+G` | Create new request |
| `Ctrl+S` | Save current request |
| `Ctrl+F` | Focus search bar |

---

## 🤖 AI Features

### Request Name Suggestions
EndpointCollab uses Google Gemini AI to generate meaningful names for your API requests based on:
- HTTP method
- URL endpoint
- Request description
- Workspace context

### JSON Body Generation
Automatically generate complex JSON structures by describing what you need in natural language. The AI understands context and creates realistic, well-structured JSON data.

---

## 🔒 Security Features

- **OAuth 2.0**: Secure authentication with industry-standard protocols
- **Server-side Sessions**: Secure session management
- **Environment Variables**: Sensitive data never exposed to client
- **Input Validation**: Zod schemas for runtime type checking
- **SQL Injection Protection**: Prisma ORM prevents SQL injection attacks

---

## 🧪 Testing

```bash
# Run ESLint
npm run lint

# Type checking
npx tsc --noEmit

# Build test
npm run build
```

---

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on every push

### Docker Deployment
```bash
# Build Docker image
docker build -t endpointcollab .

# Run with Docker Compose
docker-compose up -d
```

### Manual Deployment
```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js** - The React framework for production
- **Prisma** - Next-generation ORM for TypeScript & Node.js
- **Better Auth** - Complete open-source authentication solution
- **Google Gemini** - AI-powered features
- **Shadcn/ui** - Beautiful UI components
- **Tailwind CSS** - Utility-first CSS framework

---

## 📞 Support

If you have any questions or need help:

- **GitHub Issues**: [Create an issue](https://github.com/CodewithEvilxd/EndpointCollab/issues)
- **Email**: Contact via the footer links in the application

---

**Built with ❤️ by [CodewithEvilxd](https://github.com/CodewithEvilxd)**

The project is designed to support multi-user collaboration, structured API request management, and extensible real-time and AI-assisted features.

## Tech Stack

|      Layer | Tools Used                                                     |
| ---------: | -------------------------------------------------------------- |
|   Frontend | Next.js (App Router), React 19, TypeScript                     |
|    Backend | Next.js API routes (server in same repo)                       |
|   Database | Prisma (PostgreSQL)                                            |
|       Auth | better-auth (server + client), OAuth (GitHub, Google)          |
|    Styling | Tailwind CSS                                                   |
| Build Tool | Next.js (Turbopack via npm scripts)                            |
|  Utilities | Zod, @t3-oss/env-nextjs, @tanstack/react-query, @prisma/client |

---

## Key Features

- **Server-backed Authentication** – Provides session and account models stored in the database, with server-side auth handlers and a client auth helper.

- **Prisma Schema & Migrations** – Typed database models, migrations folder, and generated Prisma Client used by server code.

- **Workspaces & Memberships** – Workspace model with members, invites, and role enums to support multi-user collaboration.
- **Collections, Requests & Request Runs** – Modelled API request collections and runs (requests stored and request-run history recorded).

- **Client Data Layer with React Query** – Client-side caching and mutations for workspace/collection/invite flows.
- **Invite Links & Public URL Usage** – Invite URLs are constructed using a public URL env var for email/links.
- **Realtime Helpers** – Lightweight WebSocket helper and realtime UI components for collaboration features.

---

## Architecture Overview

- Monolithic Next.js application using the App Router: frontend pages and server API routes coexist in the same repo under `src/app`.

- Frontend responsibilities: UI components, React hooks, and client-side data fetching (React Query). Key folders: `src/app`, `src/components`, `src/modules`

<br/>

- Backend responsibilities: API endpoints, auth handlers, and direct DB access via Prisma Client. Key files: `src/app/api/*`, `src/lib/db.ts`, `src/lib/auth.ts`.
- Data flow: client requests → Next.js API route → server handler → Prisma Client → database; responses returned to client and cached via React Query.

<br/>

- Auth flow: OAuth provider credentials (GitHub/Google) configured via server env vars; `better-auth` provides server-side handlers (`src/app/api/auth/[...all]/route.ts`) and a client helper (`src/lib/auth-client.ts`).

---

## Configuration & Environment Variables

Only variables referenced in code are listed here.

```env
DATABASE_URL=postgresql://user:pass@host:5432/dbname
NEXT_PUBLIC_APP_URL=http://localhost:3000
GITHUB_CLIENT_ID=xxxx
GITHUB_CLIENT_SECRET=xxxx
GOOGLE_CLIENT_ID=xxxx
GOOGLE_CLIENT_SECRET=xxxx
GOOGLE_GENERATIVE_AI_API_KEY=xxxx
```

- `DATABASE_URL` — Postgres connection string used by Prisma/generator and server runtime (`prisma/schema.prisma`, `prisma` commands).

  - Layer: Backend / database

- `NEXT_PUBLIC_APP_URL` — Public base URL used to build invite links and as auth-client base URL (`src/modules/invites/actions`, `src/lib/auth-client.ts`).

  - Layer: Frontend & backend (public-facing URL)

- `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` — GitHub OAuth credentials expected by server auth setup (`src/lib/env.ts`, `src/lib/auth.ts`).

  - Layer: Backend (auth)

- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` — Google OAuth credentials expected by server auth setup (`src/lib/env.ts`).

  - Layer: Backend (auth)

- `GOOGLE_GENERATIVE_AI_API_KEY` — API key referenced in `src/lib/env.ts` for AI-related features under `src/modules/ai`.
  - Layer: Backend (AI integrations)

---

## Getting Started Locally

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/endpointcollab.git
cd endpointcollab
npm install
```

Generate Prisma client and run migrations (development):

```bash
npx prisma generate
npx prisma migrate dev
```

Run development server:

```bash
npm run dev
```

Build and start production:

```bash
npm run build
npm start
```

Notes:

- `npm run postinstall` runs `prisma generate` as defined in `package.json`.

---

## Folder Structure (focused)

```
endpointcollab
├── prisma                # Prisma schema & migrations
├── src
│   ├── app               # Next.js App Router pages & API routes
│   │   └── api
│   ├── components        # UI primitives & providers (query-provider, ui/)
│   ├── lib               # db.ts, auth.ts, auth-client.ts, env.ts
│   └── modules           # feature modules: authentication, workspace, invites, collection, request, realtime, ai
└── package.json
```

---
