import PropTypes from 'prop-types';

function BlogPost(props) {
  return (
    <div >
      {/* first blog */}
      <div className="sm:flex gap-4 px-6 py-[40px]">
        <img alt="" className='w-[121px] h-[240px]' src={props.imgSrc} />
        <div>
          <h3 className="text-orange-300 text-xl font-semibold leading-7">
            {props.title}
          </h3>
          <p className="text-justify py-[12px] text-white text-opacity-80 text-base font-normal leading-snug">
            {props.content}
          </p>
          <p className="text-orange-300 text-base font-normal leading-snug">
          {props.more}
          </p>
        </div>
      </div>
    </div>
  );
}

BlogPost.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    more: PropTypes.string.isRequired,
  };

export default BlogPost;
