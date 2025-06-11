import React, { useState, useRef, useEffect } from 'react';
import { FaMapMarkerAlt, FaCreditCard, FaUpload, FaTimesCircle, FaLandmark } from 'react-icons/fa';
import { useCart } from '../contextApi/CartContext';
import { useProduct } from '../contextApi/ProductContex';

function PlaceOrder() {
  const [formData, setFormData] = useState({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    paymentScreenshot: null,
  });
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  const { totalAmount } = useCart();
  const { currency } = useProduct();
  const fileInputRef = useRef(null);

  // Hardcoded bank details
  const bankDetails = {
    bankName: 'HBL',
    accountNumber: '123-456789-012345',
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'paymentScreenshot' && files && files[0]) {
      const file = files[0];
      setFormData((prevData) => ({ ...prevData, [name]: file }));
      setImagePreviewUrl(URL.createObjectURL(file));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  useEffect(() => {
    return () => {
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
    };
  }, [imagePreviewUrl]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order placed with:', formData);
    alert('Order placed successfully! (No real payment processed)');
    setFormData({
      fullName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      paymentScreenshot: null,
    });
    setImagePreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUploadAreaClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveImage = (e) => {
    e.stopPropagation();
    setFormData((prevData) => ({ ...prevData, paymentScreenshot: null }));
    setImagePreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Place Your Order</h2>
          <p className="mt-2 text-sm text-gray-600">
            Please provide your shipping details and payment information.
          </p>
        </div>

        {/* Order Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Shipping Address Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center">
              <FaMapMarkerAlt className="mr-3 text-gray-600" /> Shipping Address
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">Address Line 1</label>
                <input
                  type="text"
                  id="addressLine1"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  placeholder="123 Main St"
                />
              </div>
              <div>
                <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">Address Line 2 (Optional)</label>
                <input
                  type="text"
                  id="addressLine2"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  placeholder="Apt, Suite, Bldg"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  placeholder="New York"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  placeholder="NY"
                />
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip / Postal Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  placeholder="10001"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  placeholder="United States"
                />
              </div>
            </div>
          </div>

          {/* Payment Information Section */}
          <div className="space-y-4 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center">
              <FaCreditCard className="mr-3 text-gray-600" /> Payment Information
            </h3>
            
            {/* Bank Details */}
            <div className="bg-gray-100 p-4 rounded-md space-y-2">
              <div className="flex items-center text-lg font-medium text-gray-800">
                <FaLandmark className="mr-2 text-gray-600" />
                <span>Bank Name: {bankDetails.bankName}</span>
              </div>
              <div className="flex items-center text-lg font-medium text-gray-800">
                <FaCreditCard className="mr-2 text-gray-600" />
                <span>Account Number: {bankDetails.accountNumber}</span>
              </div>
            </div>

            {/* Total Amount to Pay */}
            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md">
              <span className="text-lg font-medium text-gray-800">Total Amount to Pay:</span>
              <span className="text-xl font-bold text-gray-900">{currency}{totalAmount}</span>
            </div>

            <div>
              <label htmlFor="paymentScreenshot" className="block text-sm font-medium text-gray-700">Upload Payment Screenshot</label>
              <div 
                className="mt-1 flex flex-col items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer relative overflow-hidden"
                onClick={handleUploadAreaClick}
              >
                {imagePreviewUrl ? (
                  <>
                    <img src={imagePreviewUrl} alt="Payment Screenshot Preview" className="max-h-48 w-full object-contain mb-2" />
                    <button 
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-2xl z-10"
                      title="Remove image"
                    >
                      <FaTimesCircle />
                    </button>
                  </>
                ) : (
                  <div className="space-y-1 text-center">
                    <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-gray-700 hover:text-gray-900 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-500 sr-only"
                      >
                        <span>Upload a file</span>
                      </label>
                      <p className="pl-1">Upload a file or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                )}
                <input id="file-upload" name="paymentScreenshot" type="file" className="sr-only" onChange={handleChange} accept="image/*" ref={fileInputRef} />
              </div>
              {formData.paymentScreenshot && !imagePreviewUrl && (
                <p className="text-sm text-gray-700 mt-2">Selected file: {formData.paymentScreenshot.name}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PlaceOrder; 