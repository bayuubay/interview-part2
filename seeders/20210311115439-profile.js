"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "profiles",
      [
        {
          gender: "male",
          age: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gender: "male",
          age: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gender: "female",
          age: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
