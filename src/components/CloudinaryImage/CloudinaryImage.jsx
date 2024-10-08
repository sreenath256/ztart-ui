const CloudinaryImage = ({ publicId, width, height }) => {
    const cloudName = 'dqtrifv2l'; // Replace with your actual cloud name
    const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/c_fill,w_${width},h_${height},q_auto,f_auto/${publicId}`;
  
    return (
      <img 
        src={imageUrl} 
        alt={`Cloudinary image ${publicId}`}
        width={width}
        height={height}
        loading="lazy"
      />
    );
  };