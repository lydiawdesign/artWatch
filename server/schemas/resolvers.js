const { AuthenticationError } = require('apollo-server-express');
const { User, Product } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    categories: async (parent, {category}) => {
      if(category){
        return await Product.find({category});
      }
      return await Product.find();
    },

    products: async () => {
      return await Product.find();
    },

    product: async (parent, { _id }) => {
      return await Product.findById(_id)
    },

    user: async (parent, args, context) => {
      if(context.user){
        const user = await User.findById(context.user._id)
        const watchlist = await Product.find({
          _id: {
            $in:user.watchlist
          }
        })
        // user.watchlist=products;
        console.log("--user",user)
        const result = {...user, watchlist};
        console.log(result)
        return result
      }
     throw new AuthenticationError("Not Logged In")
    }
  },
  Mutation: {
    createProduct: async (parent, args) => {
      const product = Product.create(args);
      return product;
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    
    addToWatchlist: async (parent, { productId }, context) => {
      if (context.user) {
        const updatedWatchlist = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { watchlist: productId}},
          { new: true },
        );
        return updatedWatchlist;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  }
};

module.exports = resolvers;
