
const Stepper = () => {
  const steps = [
    {
      title: 'Successfully paid by John',
      date: '24 June 2024 9:00 pm',
      completed: true,
    },
    {
      title: 'Successfully paid by Jane',
      date: '25 June 2024 10:00 am',
      completed: true,
    },
    {
      title: 'Payment pending from Bob',
      date: '26 June 2024 11:00 am',
      completed: false,
    },
  ];

  return (
    <div className="flex flex-col p-4">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-row items-center py-1.5">
          <div className="relative flex flex-col items-center">
            <div
              className={`bg-green-600 shadow-xl rounded-full justify-center items-center p-6 ${
                step.completed ? 'bg-green-600' : 'bg-gray-300'
              }`}
            />
            {index < steps.length - 1 && (
              <div className="absolute top-full w-px bg-gray-300" style={{ height: '50px' }} />
            )}
          </div>
          <div className="flex flex-col pl-4 justify-between py-2">
            <span className="text-sm font-bold text-[#7b809a]">{step.title}</span>
            <span className="text-[0.750rem] font-light text-[#7b809a]">{step.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
