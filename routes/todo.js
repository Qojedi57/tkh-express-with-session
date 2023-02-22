import express from "express";
import prisma from "../db/index.js";

const router = express.Router();

router.get("/", async (request, response) => {
  console.log(request.user);

  const todos = await prisma.todo.findMany({
    where: {
      userId: request.user.id,
    },
  });

  response.status(200).json({
    success: true,
    todos,
  });
});

router.post("/", async (request, response) => {
  const todos = await prisma.todo.create({
    data: {
      userId: request.user.id,
      name: request.body.name,
    },
  });

  response.status(200).json({
    success: true,
  });
});

    router.get("/:todo", async (request, response) => {
const todo = request.params.todo;

        const todos = await prisma.todo.findMany({
            where: {
               id:todo
            }
        })

        response.status(200).json({
            success: true,
            todos
    });
})
router.delete("/:todo",async (request, response) => {
    const todo = request.params.todo;

    const deleteTodo = await prisma.user.delete({
        where: {
            id: todo
        }
    })

    response.status(200).json({
        success: true,
    });
});

export default router;
