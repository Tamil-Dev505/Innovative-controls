import { Box, Container, Typography, Grid } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

import isoLogo from "../../assets/images/iso.png";
import csaLogo from "../../assets/images/csa.png";
import iecLogo from "../../assets/images/iec.png";

const MotionBox = motion(Box);

const AnimatedHeading = ({ text = "" }) => {
	const shouldReduce = useReducedMotion();
	const words = String(text).split(" ");
	const container = { hidden: {}, visible: { transition: { staggerChildren: shouldReduce ? 0 : 0.06 } } };
	const word = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } } };

	return (
		<MotionBox component="h2" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
			{words.map((w, i) => (
				<MotionBox key={i} component="span" variants={word} sx={{ fontWeight: 800, fontSize: { xs: '1.25rem', md: '1.6rem' }, color: '#0F172A' }}>
					{w}
					{i < words.length - 1 ? '\u00A0' : ''}
				</MotionBox>
			))}
		</MotionBox>
	);
};

const AnimatedSubtitle = ({ text = "" }) => {
	const shouldReduce = useReducedMotion();
	const wrapper = { hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

	return (
		<MotionBox variants={wrapper} initial="hidden" whileInView="visible" viewport={{ once: true }} sx={{ mb: 4 }}>
			<Typography sx={{ color: '#475569' }}>{text}</Typography>
			<Box sx={{ mt: 2, height: 4 }}>
				<MotionBox initial={{ width: 0 }} animate={{ width: shouldReduce ? '36px' : '160px' }} transition={{ duration: 0.6, ease: 'easeOut' }} sx={{ height: 4, background: 'linear-gradient(90deg,#3B82F6,#2563EB)', borderRadius: 2 }} />
			</Box>
		</MotionBox>
	);
};

const Certifications = () => {
	const logos = [
		{ src: isoLogo, alt: "ISO" },
		{ src: csaLogo, alt: "CSA" },
		{ src: iecLogo, alt: "IEC" },
	];

	const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
	const item = { hidden: { opacity: 0, y: 18, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } } };

	return (
		<Box component="section" sx={{ position: "relative", overflow: "hidden", py: { xs: 6, md: 10 }, background: "linear-gradient(180deg, rgba(247,250,255,0.8), rgba(243,244,246,0.6))" }}>
			{/* Decorative SVG divider */}
			<Box sx={{ position: "absolute", top: -30, left: 0, right: 0, pointerEvents: "none" }}>
				<svg viewBox="0 0 1440 140" width="100%" height="100" preserveAspectRatio="none">
					<path d="M0,64L48,58.7C96,53,192,43,288,37.3C384,32,480,32,576,37.3C672,43,768,53,864,74.7C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0Z" fill="rgba(59,130,246,0.06)" />
				</svg>
			</Box>

			<Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
				<MotionBox initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={container}>
					<AnimatedHeading text={"Certifications & Standards"} />
					<AnimatedSubtitle text={"We comply with international standards — certified and recognized globally."} />

					<Grid container spacing={3} justifyContent="center" alignItems="center">
						{logos.map((logo, idx) => (
							<Grid item key={idx} xs={10} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
								<MotionBox variants={item} whileHover={{ y: -6, scale: 1.02, rotate: -1 }} sx={{ width: { xs: '84%', sm: 360, md: 320 }, borderRadius: 3, p: 3, bg: 'white', boxShadow: '0 6px 30px rgba(2,6,23,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(6px)', backgroundColor: 'rgba(255,255,255,0.7)', transition: 'transform 200ms ease' }}>
									<Box component="img" src={logo.src} alt={logo.alt} loading="lazy" sx={{ maxWidth: '100%', maxHeight: 88, objectFit: 'contain' }} />
								</MotionBox>
							</Grid>
						))}
					</Grid>
				</MotionBox>
			</Container>
		</Box>
	);
};

export default Certifications;

