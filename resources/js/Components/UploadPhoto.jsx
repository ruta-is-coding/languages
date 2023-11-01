const UploadPhoto = () => {
    return (
        <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-3">
                Upload a photo
            </label>
            <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                type="file"
                name="photo"
            />
        </div>
    );
};

export default UploadPhoto;
