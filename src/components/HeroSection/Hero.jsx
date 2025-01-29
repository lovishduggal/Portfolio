import { motion } from 'framer-motion';
import Tania from '../../assets/Bg/bg.png';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  const bounceVariant = {
    initial: { y: -20 },
    animate: { y: 0 },
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  };

  return (
    <div
      className="hero min-h-[80vh] bg-gradient-to-br from-base-200 via-primary/5 to-base-300 text-center md:text-start relative overflow-hidden"
      id="About"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, 100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
            style={{
              width: '30rem',
              height: '30rem',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 2 ? 'var(--primary)' : 'var(--secondary)',
            }}
          />
        ))}
      </div>

      <div className="hero-content flex-col md:flex-row min-h-[60vh] shadow-2xl bg-base-200/80 backdrop-blur-md rounded-xl z-10 border border-base-300">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 relative"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative group"
          >
            <img
              src={Tania}
              className="max-w-sm max-h-96 rounded-lg shadow-lg transition-all duration-300
                                     group-hover:shadow-2xl group-hover:shadow-primary/50"
            />
            <motion.div
              className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary to-secondary opacity-30
                                     group-hover:opacity-50 transition-opacity duration-300 -z-10 blur-sm"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 p-4"
        >
          <div className="space-y-2">
            <motion.div
              {...bounceVariant}
              className="text-primary font-semibold"
            >
              👋 Welcome to my portfolio
            </motion.div>
            <motion.h1
              className="text-6xl font-bold"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Hi, I am <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Tania Duggal
              </span>
            </motion.h1>
          </div>

          <div className="space-y-4">
            <TypeAnimation
              sequence={[
                'DevOps-k8s Engineer',
                2000,
                'Cloud-Native Writer',
                2000,
                'Technical Content Creator',
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className="text-2xl font-semibold text-primary"
            />
            <motion.p
              className="text-xl font-normal py-2 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Through the power of words, I help people understand how to use
              the software tools in their lives and careers, empowering them to
              be as productive as possible.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
