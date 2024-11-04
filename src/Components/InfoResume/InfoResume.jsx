import phone from "../../assets/img/phone.png";
import address from "../../assets/img/location.png";
import resume from "/Omar-Yousef-shaheen.pdf";
function InfoResume() {
  return (
    <section className=" bg-opacity-75 bg-black p-4 rounded-4">
      <div className=" flex flex-column flex-md-row justify-content-between gap-5">
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
          <a
            className="text-white border border-1 border-light py-2 px-3 rounded-3"
            href={resume}
            download="Omar-Yousef-shaheen.pdf"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default InfoResume;
