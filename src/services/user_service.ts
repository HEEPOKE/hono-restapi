import prisma from "../prisma";

async function listUser() {
  return await prisma.user.findMany({
    select: {
      id: true,
      first_name: true,
      last_name: true,
      tel: true,
      account_id: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

async function getUserById(id: number) {
  return await prisma.user.findFirst({
    where: {
      id: id,
    },
  });
}

async function createUser(payload: any) {
  return await prisma.user.create({
    data: payload,
  });
}

async function updateUser(id: number, payload: any) {
  return await prisma.user.update({
    where: { id: id },
    data: payload,
  });
}

async function deleteUser(id: number) {
  return await prisma.user.delete({
    where: { id: id },
  });
}

const UserServices = {
  listUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

export default UserServices;
