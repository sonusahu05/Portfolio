import vivek from '../assets/vivek.jpeg';

const Hero = () => {
    return (
      <section className="bg-gray-100 text-center py-20">
        <img 
          src={vivek}
          alt="Vivekanand Sahu" 
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-4xl font-bold text-gray-800">Hello, I'm Vivekanand Sahu</h2>
        <p className="text-lg text-gray-600 mt-4">
          A passionate problem-solver and tech enthusiast who loves creating impactful solutions.
        </p>
      </section>
    );
  };
  
  export default Hero;
