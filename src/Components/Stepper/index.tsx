import linearGradient from '@/assets/theme/functions/linearGradient';
import PriceChangeOutlined from '@mui/icons-material/PriceChangeOutlined';
import PendingIcon from '@mui/icons-material/Pending'
import { useTheme } from '@mui/material/styles';

const Stepper = () => {
  const theme = useTheme()
  const { gradients } = theme.palette as { gradients?: any }

  const steps = [
    {
      title: 'Successfully paid by John',
      date: '24 June 2024 9:00 pm',
      completed: true, icon: <PriceChangeOutlined fontSize='small' sx={{ color: '#FFF' }} />
    },
    {
      title: 'Successfully paid by Jane',
      date: '25 June 2024 10:00 am',
      completed: true,
      icon: <PriceChangeOutlined fontSize='small' sx={{ color: '#fff' }} />
    },
    {
      title: 'Payment pending from Bob',
      date: '26 June 2024 11:00 am',
      completed: false,
      icon: <PendingIcon fontSize='small' sx={{ color: '#FFF' }} />
    },
    {
      title: 'Successfully paid by Jane',
      date: '25 June 2024 10:00 am',
      completed: true,
      icon: <PriceChangeOutlined fontSize='small' sx={{ color: '#fff' }} />
    },
    {
      title: 'Successfully paid by Jane',
      date: '25 June 2024 10:00 am',
      completed: true,
      icon: <PriceChangeOutlined fontSize='small' sx={{ color: '#fff' }} />
    },
    {
      title: 'Successfully paid by Jane',

      date: '25 June 2024 10:00 am',
      completed: true,
      icon: <PriceChangeOutlined fontSize='small' sx={{ color: '#fff' }} />
    },
  ];

  const successBackgroundValue = linearGradient(gradients.success.main, gradients.success.state)

  return (
    <div className="flex flex-col p-4">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-row items-center py-1.5">
          <div className="relative flex flex-col items-center">
            <div
              className={`shadow-xl flex justify-center rounded-full items-center h-12 w-12 ${step.completed ? '' : 'bg-gray-300'
                }`}
              style={step.completed ? { background: successBackgroundValue } : {}}
            >
              {step.icon}
            </div>
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
