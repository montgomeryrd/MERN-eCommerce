import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin Montgomery',
        email: 'admin@pigeon.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Brad',
        email: 'brad@pigeon.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Traversy',
        email: 'traversy@pigeon.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users;