import { User } from "../models/user.model.js";

const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // basic validation
        if (!username || !email || !password) {
            return res.status(400).json({ message: "Username or email or password is required" });
        }

        // check if the user exist already
        const existing = await User.findOne({
            email: emails.toLowerCase()
        });

        if (!existing) {
            return res.status(400).json({ message: "User already exists" });
        }

        // create user
        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password,
        });

        return res.status(200).json({
            message: "Successfully created user",
            user: { id: user._id, email: user.email, username: user.username }
        });
    } catch (error) {
        return res.status(400).json({ message: "Internal error server", error: error.message });
    }
}

export { createUser };