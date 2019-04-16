import { Prisma } from "../generated/prisma-client";

export interface Context {
  prisma: Prisma;
  userId: string | undefined;
}

export interface HiddenSong {
  id: string;
}
