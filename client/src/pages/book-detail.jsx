import { Footer, Header } from '../components';
import styles from '../css/detail.module.css';
import Styles from '../css/home.module.css';

import { A11y, Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Card } from '../ui-components';

const BookDetail = () => {
	return (
		<div className={styles['detail-page']}>
			<Header />
			<div className={Styles.container}>
				<div className={styles.detail}>
					<div className={styles['detail-main']}>
						<img src='/detail.png' alt='detail-image' />
						<div className={styles['detail-body']}>
							<h2>Ihyou Ulumid din</h2>
							<h4>Abu Homid G’azzoliy</h4>
							<p>
								matbaa va matn terish sanoatining oddiygina soxta matnidir. Lorem Ipsum
								1500-yillardan beri sanoatning standart qo’g’irchoq matni bo’lib kelgan, o`shandan
								beri noma`lum printer galleyni olib, kitob namunalarini yaratish uchun shifrlagan. U
							</p>

							<img src='/detail.png' alt='detail-image' className={styles.innerImg}/>

							<div className={styles['detail-infor']}>
								<p>
									Janer : <span> Diniy adabiyotlar</span>
								</p>
								<p>
									Kitob holati : <span>yangi</span>
								</p>
								<p>
									Kitob tili : <span> O‘zbekcha</span>
								</p>
								<p>
									Manzili : <span> Shayhontoxur tumani, Toshkent, Toshkent vil.</span>
								</p>
								<p>
									Data : <span>16.03.2022 | 1413</span>
								</p>
							</div>
							<div className={styles.user}>
								<img src='/avatar.png' alt='avatar' />
								<div className={styles['user-infor']}>
									<p>Khurshidbek Sobirov</p>
									<p>+998 99 055 82 84</p>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.slider}>
						<Swiper
							modules={[Navigation, Pagination, A11y]}
							spaceBetween={50}
							breakpoints={{
								// when window width is >= 576px
								576: {
									slidesPerView: 1,
								},
								// when window width is >= 768px
								768: {
									slidesPerView: 2,
								},
								// when window width is >= 1024px
								1024: {
									spaceBetween: 10,
									slidesPerView: 3,
								},
								1280: {
									slidesPerGroup: 2,
									slidesPerView: 4,
								},
							}}
							navigation
							pagination={{ clickable: true }}
							scrollbar={{ draggable: true }}
							onSwiper={swiper => console.log(swiper)}
							onSlideChange={() => console.log('slide change')}
						>
							<SwiperSlide>
								<Card />
							</SwiperSlide>
							<SwiperSlide>
								<Card />
							</SwiperSlide>
							<SwiperSlide>
								<Card />
							</SwiperSlide>
							<SwiperSlide>
								<Card />
							</SwiperSlide>
							<SwiperSlide>
								<Card />
							</SwiperSlide>
							<SwiperSlide>
								<Card />
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default BookDetail;
