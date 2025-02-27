import AboutUs1 from "../assets/banners/about-us/AboutUs-1.jpg";
import AboutUs2 from "../assets/banners/about-us/AboutUs-2.jpg";
import AboutUs3 from "../assets/banners/about-us/AboutUs-3.jpg";
import Broadcast from "../components/header/Broadcast";


const AboutUs = () => {
  return (
    <div className="mt-14">
        <Broadcast />
        <div className="flex flex-col text-[16.5px] text-black sm:tracking-tighter md:tracking-[-0.045em]">
            <div className="flex flex-row w-full">
                <div className="w-1/2">
                    <img src={AboutUs1} alt="about-oner-active" />
                </div>
                <div className="text-left px-8 w-1/2 pt-30 mr-4">
                    <p className="text-3xl font-bold my-4 tracking-normal">ABOUT ONER ACTIVE</p>
                    <p className="my-2 font-semibold">Nothing is clearer to us than the belief that every woman should include strength training in her life to enhance both physical and mental well-being. It's about building strong bodies and even stronger minds, asserting their right to take up space in the gym, and allowing the spotlight to shine bright on their progress.</p>
                    <p className="my-2 font-semibold">To us, strength training represents a determined, goal-oriented mindset and an unwavering work ethic. We don't wait for success; we create it through hard work and determination. When faced with challenges, we don't back down; instead, we break through barriers, recognising that true progress lies on the other side.</p>
                    <p className="my-2 font-semibold">These are the pillars that form the foundation of Oner Active. We consistently challenge ourselves to create innovative and impactful products, so that you can perform better. With our range of products and innovative approach, we provide a wide variety of colours to ensure that all skin tones genuinely radiate in Oner.</p>
                </div>
            </div>

            <div className="flex flex-row">
                <div className="text-left px-8 w-1/2 pt-14 mr-4">
                    <p className="text-3xl font-bold my-4 tracking-normal">ABOUT KRISSY CELA</p>
                    <p className="my-2 font-semibold">Founded in 2020 by female co-founder, entrepreneur, and strength training coach Krissy Cela, Oner Active is a brand rooted in resilience and determination. Growing up in an Albanian household where her parents worked multiple jobs to make ends meet, Krissy learned the value of hard work and sheer determination from an early age. While studying law at university, Krissy embarked on her fitness journey, initially stepping into a gym without knowing quite what to expect.</p>
                    <p className="my-2 font-semibold">With no prior experience in strength training, she grabbed a set of dumbbells and immediately fell in love with the empowering feeling it gave her. After obtaining her Personal Training qualification, she leveraged her online platform and gym experience to help millions of women around the world.</p>
                    <p className="my-2 font-semibold">Struggling to find activewear that made her feel confident in the gym, she often had to modify old tops and adjust leggings at the waist to make them fit her body properly. This experience drove her to understand what women needed in the gym to not only perform but also feel confident while lifting heavy weights.</p>
                    <p className="my-2 font-semibold">She has become a beacon of empowerment, offering unwavering support to women worldwide, helping them realise their potential, achieve their dreams, and make the impossible possible. Krissy’s mantra is to conquer what none of us think is possible – and keep going; it’s where amazing things happen.</p>
                    <p className="my-2 font-semibold">At Oner Active, we embody these values with a mission to empower every woman, making them feel exceptional and powerful as they work towards becoming the best version of themselves.</p>
                </div>
                <div className="w-1/2">
                    <img src={AboutUs2} alt="about-oner-active" />
                </div>
            </div>

            <div className="flex flex-row">
                <div className="w-1/2">
                    <img src={AboutUs3} alt="about-oner-active" />
                </div>
                <div className="text-left px-8 w-1/2 pt-26 mr-4">
                    <p className="text-3xl font-bold my-4 tracking-normal">OUR VALUES</p>
                    <p className="my-2 font-semibold">Oner Active lives and breathes strength through our purpose. We apply the principles of strength to our day-to-day lives. In the gym, outside of it, internally with our employees and openly to our community:</p>
                    <p className="my-2 font-semibold"><span className="font-bold">Consistency</span> - Just show up, the minute you stop, it ends with you.</p>
                    <p className="my-2 font-semibold"><span className="font-bold">Accountability</span> - Only you can achieve your PBs, but we’re here to spot you every day.</p>
                    <p className="my-2 font-semibold"><span className="font-bold">Hard work</span> - We believe everyone always has 1% more, however hard it is.</p>
                    <p className="my-2 font-semibold"><span className="font-bold">Patience</span> - We’re not looking for one off results… We’re here for the long term. So buckle up, be patient, and stay consistent.</p>
                    <p className="my-2 font-semibold" ><span className="font-bold">Purpose</span> - Know your why. Never forget why you’re here, and focus on the bigger picture.</p>
                    <p className="my-2 font-semibold"><span className="font-bold">Community</span> - We shall lift you up the way we expect you to lift us up.</p>
                    <p className="my-2 font-semibold">We encourage you to remember your purpose and to know that regardless of your own personal fitness journey you’re never alone within the OA community.</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
