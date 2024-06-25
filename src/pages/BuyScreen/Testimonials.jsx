import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StarIcon } from "@heroicons/react/24/solid";

const Testimonials = () => {
  const images = [
    {
      id: 1,
      src: "https://s3-alpha-sig.figma.com/img/fb5a/76c6/7dd5d90ad7deab022a7cccb3794e247b?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FNd1ZAXrWaB7LVBGclyUIps4-fmLEMHD6FhHuU~uy5qns4Ax~sv2ncysxcSTjh07h0P6NFVFaj7iCUWLe06dnIb1u9rKvfFDZpa4vFu4JdgMgq~JH2m6C07bVFYSLnpnbRKAUoqAXKjfFxVmOlBmDRG83gAUm6QbR8B1fARfA4-X2bRwnvzWbd0xUCIhQwTSqF5kdj4lJlq6w5mhqyQ5wh9xYmL8VlspQ8GBqSKuTbW2G3vBrfWg49A3zbI7FUHDJaAvHeL95giFp-1X~Y4w2BIy6-jwyYGoWulUsxzYTjiSLQvJOMk0B5k0FM~Uk3vcFc0cvp709NLnjl54w9-fgQ__",
      alt: "Slide 1",
      name: "Tony Stark",
      title: "Marketing manager, XYZ",
      description:
        '"The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It\'s the peace of mind I was looking for."',
    },
    {
      id: 2,
      src: "https://s3-alpha-sig.figma.com/img/5983/c948/e34a2ed36077d50d510f822ee9c75459?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JVBLOy-3lRR95elqX1dhLhUk1I6G2Ptwrb9~G0FdgVLt6GTKv1OB1c65VNzpGvQIZSJW5NDL-19iHsR89ASGSzvwOKvvsbGpOqbPZi9PIoyfQ25TMKAdlCfp2xUdB45joQBfj-4B3E831aEVRUTt1Ri3b7-lplkXjVhlwMh5KruxihUqD46mEHz-cf9DvbtKZDkDVpZZ1yon4pPC5BiuEtgckxdfro7RrsTJzd40YmaNZzqu90D1qKrKP4Qp3nGKNaf8zNX4a5ZU9WWXd6StQqvJCipbQuX-~nX0vxWLcQJA3hRPQoMgZOGUbfDDFzntZsTg-IYlrh9TFq-sOXJGLg__",
      alt: "Slide 2",
      name: "Tony Stark",
      title: "Marketing manager, XYZ",
      description:
        '"The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It\'s the peace of mind I was looking for."',
    },
    {
      id: 3,
      src: "https://s3-alpha-sig.figma.com/img/fb5a/76c6/7dd5d90ad7deab022a7cccb3794e247b?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FNd1ZAXrWaB7LVBGclyUIps4-fmLEMHD6FhHuU~uy5qns4Ax~sv2ncysxcSTjh07h0P6NFVFaj7iCUWLe06dnIb1u9rKvfFDZpa4vFu4JdgMgq~JH2m6C07bVFYSLnpnbRKAUoqAXKjfFxVmOlBmDRG83gAUm6QbR8B1fARfA4-X2bRwnvzWbd0xUCIhQwTSqF5kdj4lJlq6w5mhqyQ5wh9xYmL8VlspQ8GBqSKuTbW2G3vBrfWg49A3zbI7FUHDJaAvHeL95giFp-1X~Y4w2BIy6-jwyYGoWulUsxzYTjiSLQvJOMk0B5k0FM~Uk3vcFc0cvp709NLnjl54w9-fgQ__",
      alt: "Slide 3",
      name: "Tony Stark",
      title: "Marketing manager, XYZ",
      description:
        '"The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It\'s the peace of mind I was looking for."',
    },
    {
      id: 4,
      src: "https://s3-alpha-sig.figma.com/img/5983/c948/e34a2ed36077d50d510f822ee9c75459?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JVBLOy-3lRR95elqX1dhLhUk1I6G2Ptwrb9~G0FdgVLt6GTKv1OB1c65VNzpGvQIZSJW5NDL-19iHsR89ASGSzvwOKvvsbGpOqbPZi9PIoyfQ25TMKAdlCfp2xUdB45joQBfj-4B3E831aEVRUTt1Ri3b7-lplkXjVhlwMh5KruxihUqD46mEHz-cf9DvbtKZDkDVpZZ1yon4pPC5BiuEtgckxdfro7RrsTJzd40YmaNZzqu90D1qKrKP4Qp3nGKNaf8zNX4a5ZU9WWXd6StQqvJCipbQuX-~nX0vxWLcQJA3hRPQoMgZOGUbfDDFzntZsTg-IYlrh9TFq-sOXJGLg__",
      alt: "Slide 4",
      name: "Tony Stark",
      title: "Marketing manager, XYZ",
      description:
        '"The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It\'s the peace of mind I was looking for."',
    },
    {
      id: 5,
      src: "https://s3-alpha-sig.figma.com/img/fb5a/76c6/7dd5d90ad7deab022a7cccb3794e247b?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FNd1ZAXrWaB7LVBGclyUIps4-fmLEMHD6FhHuU~uy5qns4Ax~sv2ncysxcSTjh07h0P6NFVFaj7iCUWLe06dnIb1u9rKvfFDZpa4vFu4JdgMgq~JH2m6C07bVFYSLnpnbRKAUoqAXKjfFxVmOlBmDRG83gAUm6QbR8B1fARfA4-X2bRwnvzWbd0xUCIhQwTSqF5kdj4lJlq6w5mhqyQ5wh9xYmL8VlspQ8GBqSKuTbW2G3vBrfWg49A3zbI7FUHDJaAvHeL95giFp-1X~Y4w2BIy6-jwyYGoWulUsxzYTjiSLQvJOMk0B5k0FM~Uk3vcFc0cvp709NLnjl54w9-fgQ__",
      alt: "Slide 5",
      name: "Tony Stark",
      title: "Marketing manager, XYZ",
      description:
        '"The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It\'s the peace of mind I was looking for."',
    },
    {
      id: 6,
      src: "https://s3-alpha-sig.figma.com/img/5983/c948/e34a2ed36077d50d510f822ee9c75459?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JVBLOy-3lRR95elqX1dhLhUk1I6G2Ptwrb9~G0FdgVLt6GTKv1OB1c65VNzpGvQIZSJW5NDL-19iHsR89ASGSzvwOKvvsbGpOqbPZi9PIoyfQ25TMKAdlCfp2xUdB45joQBfj-4B3E831aEVRUTt1Ri3b7-lplkXjVhlwMh5KruxihUqD46mEHz-cf9DvbtKZDkDVpZZ1yon4pPC5BiuEtgckxdfro7RrsTJzd40YmaNZzqu90D1qKrKP4Qp3nGKNaf8zNX4a5ZU9WWXd6StQqvJCipbQuX-~nX0vxWLcQJA3hRPQoMgZOGUbfDDFzntZsTg-IYlrh9TFq-sOXJGLg__",
      alt: "Slide 6",
      name: "Tony Stark",
      title: "Marketing manager, XYZ",
      description:
        '"The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It\'s the peace of mind I was looking for."',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-0 md:px-[50px] lg:px-[80px]">
      <h1 className="text-[24px] md:text-[40px] font-bold text-center font-montserrat mb-8 md:mb-16">
        Testimonials
      </h1>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id} className="slider-item px-4">
              <div className="bg-[#ECF5FF] pb-8">
                <div className="flex gap-2 items-center justify-center py-8">
                  <StarIcon className="h-6 w-6 text-[#FEC84B]" />
                  <StarIcon className="h-6 w-6 text-[#FEC84B]" />
                  <StarIcon className="h-6 w-6 text-[#FEC84B]" />
                  <StarIcon className="h-6 w-6 text-[#FEC84B]" />
                  <StarIcon className="h-6 w-6 text-[#F4E6C5]" />
                </div>
                <div className="text-center font-poppins text-lg text-[#818181] px-4 md:px-16">
                  <p>{item.description}</p>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="mx-auto rounded-full w-12 h-12 mt-8"
                  />
                  <p className="font-montserrat font-semibold text-[#111827]">
                    {item.name}
                  </p>
                  <p className="font-poppins text-[#6B7280]">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
