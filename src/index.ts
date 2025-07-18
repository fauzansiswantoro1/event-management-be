import express, { Application, Request, Response } from "express";
import { UserRouter } from "./routers/user.router";
import { AuthRouter } from "./routers/auth.router";
import cors from "cors";

const PORT: number = 8000;

const app: Application = express();
app.use(express.json());
app.use(cors());

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send({ message: "welcome to my api" });
});

const authRouter = new AuthRouter();
app.use("/api/auth", authRouter.getRouter());

const userRouter = new UserRouter();
app.use("/api/users", userRouter.getRouter());

app.listen(PORT, () => {
  console.log(`Server running on : http://localhost:${PORT}/api`);
});
