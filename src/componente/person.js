const Person = ({ name, img, role }) => {
  return (
    <div className="col-lg-4">
      <div className="text-center card-box">
        <div className="member-card pt-2 pb-2">
          <div className="thumb-lg member-thumb mx-auto">
            <img
              src={img}
              className="rounded-circle img-thumbnail"
              alt={name}
            />
          </div>
          <div className="">
            <h4>{name}</h4>
            <p className="text-muted">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
