This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## What to develop for this project

1. Decent project structure with Layouts
    - Layouts for base components (meta, top navigation, footer...) that will be used in every site.
    - Layouts for spesific routes (some modifications to the base layout)
2. Blog/Posts page where content will be fetched outside of this project (CMS)
    - I would like a CMS that has a good editor and interface, and if these do not exists then CMS where to copy paste a MD file and upload images.
    - A good API
3. RealtimeChat with connected users
    - Users can see messages and also write them (Uses websockets)
    - First just a session based (nothing is saved to db)
4. Login with OAuth
    - Sessions
    - Check admin priviledges in supabase (Grants admin access to tables)
    - Check admin priviledges in middleware (Grants admin access to protected routes and additional features)
5. Some CRUD application
    - User profile when logged in
    - Feedback form for logged in users (can do all CRUD operations for this)
6. Realtime data graph or just graph with fetched data
    - Page visit counter (Session based)
    - Can be fetched from db or from outside source
7. Tests for all functions
    - Need to check what is a good testing library for react/next, or if it is needed