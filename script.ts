import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  /**
   * I want to create a new user. In the User model, the id field is:
   *   id    Int     @id @default(autoincrement())
   * so I should not have to pass a value to the id when I call prisma.user.create()
   * because it should be determined by the db on creation
   *
   * Using the  correct type Prisma.UserCreateInput I do not have to specify a value for id
   */

  const newUser: Prisma.UserCreateInput = {
    email: "test@example.com",
    name: "John Doe",
  };

  prisma.user.create({
    data: newUser,
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
