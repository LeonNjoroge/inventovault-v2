# 📦 InventoVault — Inventory Management System

**InventoVault** is a full-stack inventory management system designed to help growing businesses track stock levels, sales, purchases, and generate insightful reports.

---

## 🌐 Tech Stack

### Frontend (Client - `Next.js`)
- **Framework**: Next.js (Page Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context (or Apollo Client cache)
- **GraphQL Client**: Apollo Client

### Backend (Server - `Express + GraphQL`)
- **Server Framework**: Express.js
- **GraphQL Server**: Apollo Server
- **Database ORM**: Prisma
- **Database**: PostgreSQL
- **Schema-first API**: GraphQL + TypeDefs/Resolvers

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/inventovault.git
cd inventovault
```

### 2. Setup Environment Variables

#### Server (`/server/.env`)
```env
DATABASE_URL=postgresql://user:password@localhost:5432/inventovault
```

#### Client (`/client/.env.local`)
```env
NEXT_PUBLIC_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
```

---

### 3. Install Dependencies

#### Server
```bash
cd server
npm install
```

#### Client
```bash
cd client
npm install
```

---

### 4. Database & Prisma

```bash
cd server
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed  # Optional: run if you have a seed.ts
```

---

### 5. Run Both Projects

#### Server
```bash
cd server
npm run dev
```

#### Client
```bash
cd client
npm run dev
```

---

## 📊 Features

- ✅ Responsive Landing Page
- ✅ Dashboard with KPIs
- ✅ Product & Variant Management
- ✅ Purchase & Sale Recording
- ✅ Inventory Movement Logging
- ✅ Multi-Category Support
- ✅ GraphQL API Integration
- ✅ Fully Modular & Scalable Codebase

---

## ✨ Future Improvements

- ⏳ Authentication & Role Management
- 📈 Advanced Reporting & Exports
- 🌐 Multi-Store Capabilities
- 🔐 Secure Audit Logs
- 📱 Mobile Optimizations

---

## 👨‍💻 Author

**Leon Njoroge**  
🖥️ [leoncreates.online](https://leoncreates.online)

---

## 📝 License

MIT © 2025 InventoVault
