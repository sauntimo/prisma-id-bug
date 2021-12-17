import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  /**
   * I want to create a new user. In the User model, the id field is:
   *   id    Int     @id @default(autoincrement())
   * so I should not have to pass a value to the id when I call prisma.user.create()
   * because it should be determined by the db on creation
   *
   *! However, the User type has {id: number} which appears to be incorrect
   */

  const newUser1: User = {
    id: null, // Type 'null' is not assignable to type 'number'.ts(2322)
    email: "test@example.com",
    name: "John Doe",
  };

  // Property 'id' is missing in type '{ email: string; name: string; }' but required in type 'User'.ts(2741)
  const newUser2: User = {
    email: "test@example.com",
    name: "John Doe",
  };

  prisma.user.create({
    data: newUser1,
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
