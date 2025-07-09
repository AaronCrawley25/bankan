import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";

export const db = drizzle({
    connection: {
        host: process.env.POSTGRES_HOST ?? "db",
        port: parseInt(process.env.POSTGRES_PORT ?? "5432"),
        user: process.env.POSTGRES_USER ?? "postgres",
        password: process.env.POSTGRES_PASSWORD ?? "password",
        database: process.env.POSTGRES_DB ?? "bankan",
    },
});

await migrate(db, {
    migrationsFolder: "drizzle",
});
