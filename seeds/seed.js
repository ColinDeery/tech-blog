const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    console.log('\n----- USERS SEEDED -----\n');
    for (const post of postData) {
      await Post.create({
        ...post,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
    }
    console.log('\n----- POSTS SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedDatabase();