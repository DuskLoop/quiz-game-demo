import { Prisma } from "../generated/prisma-client";

export interface Context {
  prisma: Prisma;
}

export interface HiddenSong {
  id: string;
}
