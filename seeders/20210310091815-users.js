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
      "users",
      [
        {
          fullName: "Bayu Suryo Aji",
          profileId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Michael Jackson",
          profileId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Eka Dyah",
          profileId: 3,
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
