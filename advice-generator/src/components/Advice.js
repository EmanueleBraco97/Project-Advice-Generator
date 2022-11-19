import "./Advice.css";

const Advice = ({ data }) => {
  return (
    <article className="article-top">
      {Object.keys(data).map((item, i) => {
        return (
          <div className="sub-container" key={i}>
            <div className="title-top">
              <h5>ADVICE</h5>
              <p className="id-consiglio">#{data[item].id}</p>
            </div>
            <article className="consiglio">
              <p>"{data[item].advice}"</p>
            </article>
          </div>
        );
      })}

      <div className="center-img">
        <svg
          className="pattern-destkop"
          width="444"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path fill="#cee3e9" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>

        <svg
          className="pattern-mobile"
          style={{ display: "none " }}
          width="290"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path fill="#cee3e9" d="M0 8h122v1H0zM173 8h122v1H173z" />
            <g transform="translate(138)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
      </div>
    </article>
  );
};

export default Advice;
