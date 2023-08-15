import prisma from "../prisma";

async function listAccount() {
  return await prisma.account.findMany({
    select: {
      id: true,
      email: true,
      first_name: true,
      last_name: true,
      tel: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

async function getAccountById(id: number) {
  return await prisma.account.findFirst({
    where: {
      id: id,
    },
  });
}

async function createAccount(payload: any) {
  return await prisma.account.create({
    data: payload,
  });
}

async function findEmail(email: string) {
  return await prisma.account.findFirst({
    where: {
      email: email,
    },
  });
}

async function updateAccount(id: number, payload: any) {
  return await prisma.account.update({
    where: { id: id },
    data: payload,
  });
}

async function deleteAccount(id: number) {
  return await prisma.account.delete({
    where: { id: id },
  });
}

const AccountServices = {
  listAccount,
  getAccountById,
  createAccount,
  findEmail,
  updateAccount,
  deleteAccount,
};

export default AccountServices;
