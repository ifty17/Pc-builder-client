import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ bookedProduct, setBookedProduct }) => {

    const user = useContext(AuthContext);

    const handleOrder = (event) => {
      event.preventDefault();
      const form = event.target;
      const displayName = form.displayName.value;
      const email = form.email.value;
      const productName = form.productName.value;
      const price = form.price.value;
      const phoneNumber = form.phoneNumber.value;
      const meetingLocation = form.meetingLocation.value;

      console.log(
        displayName,
        email,
        productName,
        price,
        phoneNumber,
        meetingLocation
      );

      const orderInfo = {
        displayName,
        email,
        productName,
        price,
        phoneNumber,
        meetingLocation,
      };

      fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            setBookedProduct(null);
            toast.success("Booking confirmed");
          } else {
            toast.error(data.message);
          }
        });
    };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleOrder}>
            <div>
              <p>Name:</p>
              <input
                type="text"
                name="displayName"
                value={user?.user?.displayName}
                disabled
                placeholder="Type here"
                className="input input-bordered input-primary w-full mt-1"
              />
            </div>
            <div className="mt-2">
              <p>Email:</p>
              <input
                type="text"
                name="email"
                value={user?.user?.email}
                disabled
                placeholder="Type here"
                className="input input-bordered input-primary w-full mt-1"
              />
            </div>
            <div className="mt-2">
              <p>Product name:</p>
              <input
                type="text"
                name="productName"
                value={bookedProduct?.name}
                disabled
                placeholder="Type here"
                className="input input-bordered input-primary w-full mt-1"
              />
            </div>
            <div className="mt-2">
              <p>$$ Price:</p>
              <input
                type="text"
                name="price"
                value={bookedProduct?.resale_price}
                disabled
                placeholder="Type here"
                className="input input-bordered input-primary w-full mt-1"
              />
            </div>
            <div className="mt-2">
              <p>Mobile number:</p>
              <input
                type="text"
                name="phoneNumber"
                required
                placeholder="Type here"
                className="input input-bordered input-primary w-full mt-1"
              />
            </div>
            <div className="mt-2">
              <p>Meeting location:</p>
              <input
                type="text"
                name="meetingLocation"
                required
                placeholder="Type here"
                className="input input-bordered input-primary w-full mt-1"
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline btn-primary w-full mt-2"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;