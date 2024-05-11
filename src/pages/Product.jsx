import { NavBar } from "../components/NavBar.jsx";
// import styles from "./Product.module.css";

export default function Product({ active, setActive }) {
  
  return (
    <div className="flex flex-col items-center h-screen bg-worldwise-bg">
      <NavBar active={active} setActive={setActive} />
      <div className="my-[4rem] divBarTwo flex flex-grow-10 h-[26rem] w-2/3 overflow-hidden gap-x-12 px-4 py-4 place-self-center">
        <div className="overflow-hidden max-w-[50%]">
          <img src="src\assets\img-3.jpg"></img>
        </div>
        <div className="divBarTwo flex flex-col flex-grow-10 h-[26rem] w-2/3 overflow-hidden gap-x-12 px-4 py-4 place-self-center">
          <h3 className="text-[3rem] leading-tight mb-[3rem] text-slate-100">
            Simple pricing. <br /> Just $9/month.
          </h3>
          <p className="relative inset-0 text-left text-slate-100">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste
          </p>
        </div>
      </div>
    </div>
  );
}
