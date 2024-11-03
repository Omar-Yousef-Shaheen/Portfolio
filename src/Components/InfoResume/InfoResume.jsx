import phone from "../../assets/img/phone.png";
import gmail from "../../assets/img/Gmail.png";
import address from "../../assets/img/location.png";
function InfoResume() {
  return (
    <div className=" bg-opacity-75 bg-black p-4 rounded-4">
      <div className=" flex  justify-content-between gap-5">
        <div className="phone flex   gap-3 align-items-center  ">
          <div>
            <img className="w-5" src={phone} />
          </div>
          <span>01141214658</span>
        </div>

        <div className="location flex  gap-3 align-items-center ">
          <div>
            <img className="w-5" src={address} />
          </div>
          <span>Cairo,Maadi</span>
        </div>
        <div>
          <button className="btn btn-light fw-semibold">Download Resume</button>
        </div>
      </div>
    </div>
  );
}

export default InfoResume;
