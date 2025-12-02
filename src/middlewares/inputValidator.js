const inputValidator = (schema) => (req, res, next) => {
    try {
        const response = schema.safeParse(req.body);

        if (!response.success) {
            const errors = response.error.issues.map(issue => {
                const field = issue.path[0];
                console.log(issue)
                let message = issue.message;

                return { field, message };
            });

            return res.status(400).json({
                status: "error",
                message: "validation failed",
                errors
            });
        }

        req.body = response.data;
        next();
    } catch (error) {
        throw error;
    }
}

export { inputValidator };