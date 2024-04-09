import mongoose from 'mongoose';
const OrderItemChema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});
const OrderSchema = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    items: [OrderItemChema],
    orderNumber: {
        type: String,
        auto: true,
        unique: true,
    },
    customerInfo: {
        type: {
            name: {
                type: String,
                required: true,
            },
            phone: {
                type: Number,
            },
            email: {
                type: String,
                required: true,
            },
            payment: {
                type: Number,
            },
            city: {
                type: Number,
            }
        },
        required: true,
    },
    totalPrice: {
        type: Number,
    },
    status: {
        type: String,
        enum: ["pending", "confirmed", "shipped", "delivered", "canceled"],
        default: "pending",
    },
}, { timestamps: true, versionKey: false });


export default mongoose.model('Order', OrderSchema);

// {
//     id: 1
//     userId: 1
//     items: [
//         {
//             id: 1,
//             productId: 1,
//             quantity: 2,
//             price: 100
//         }
//     ]
//     orderNumber: 123
//     customerInfo: {
//         name: 'Trần Đình Minh đẹp trai thế nhỉ',
//             email: 'minh@gmail.com',
//                 payment: 'credit card' | 'COD',
//     }
//     totalPrice
//     status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'canceled'
// }