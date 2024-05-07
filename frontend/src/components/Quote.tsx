const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="max-w-xl ">
          <div className="text-3xl font-bold tracking-[1px]">
            "The customer service I recieved was exceptional. The support team
            went above and beyond to address my concerns."
          </div>
          <div className="font-semibold mt-2">Jules Winnfield</div>
          <div className=" text-slate-400 font-light text-sm">
            CEO, Acme Inc
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
