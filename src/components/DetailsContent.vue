<script setup>
	import IconArrowVue from "./icons/IconsDetailsContent/IconArrow.vue";
	import IconColombiaVue from "./icons/IconsDetailsContent/IconColombia.vue";
	import IconCss from "./icons/IconsDetailsContent/IconCss.vue";
	import IconFigmaVue from "./icons/IconsDetailsContent/IconFigma.vue";
	import IconGitVue from "./icons/IconsDetailsContent/IconGit.vue";
	import IconHtml from "./icons/IconsDetailsContent/IconHtml.vue";
	import IconJs from "./icons/IconsDetailsContent/IconJs.vue";
	import IconNpmVue from "./icons/IconsDetailsContent/IconNpm.vue";
	import IconPostmanVue from "./icons/IconsDetailsContent/IconPostman.vue";
	import IconTerminalVue from "./icons/IconsDetailsContent/IconTerminal.vue";
	import IconVscodeVue from "./icons/IconsDetailsContent/IconVscode.vue";
	import IconVue from "./icons/IconsDetailsContent/IconVue.vue";
	const projects = [
		{
			name: "Proyecto 1",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
			technologies: ["HTML", "CSS", "JS"],
			link: "",
		},
		{
			name: "Proyecto 2",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
			technologies: ["HTML", "CSS", "JS"],
			link: "",
		},
		{
			name: "Proyecto 3",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
			technologies: ["HTML", "CSS", "JS"],
			link: "",
		},
	];
</script>
<template>
	<div class="details_section">
		<IconArrowVue class="draw_svg" />
		<div class="section_1">
			<h1>¡BUEN DÍA!</h1>
			<p>
				Mi nombre es Andrés Castellanos. Naci en colombia <IconColombiaVue /> y
				soy Desarrollador Web.
			</p>
			<p>
				Profesional en Ingeniería de Sistemas con conocimientos en desarrollo
				web. Capaz de ejercer adecuadamente tareas de proyectos pequeños o
				grandes. Así mismo, busca encontrar la mejor manera de dar solución a
				las necesidades presentadas y aprender continuamente de estás. Por otra
				parte, posee un alto sentido de la responsabilidad y se esmera por
				crecer como profesional, así mismo, lleva consigo un espíritu servicial
				y atento. Ha elaborado una serie de proyectos a lo largo de su carrera y
				de forma autodidacta donde en su mayoria fueron enfocados en el
				desarrollo de software y redes. Le gusta el ajedrez, la guitarra, la
				tecnología, los idiomas extranjeros (Ingles y chino mandarín) y las
				motos.
			</p>
		</div>

		<div class="section_2">
			<h1>MIS HABILIDADES</h1>
			<div class="icons_skills">
				<IconHtml />
				<IconCss />
				<IconJs />
				<IconVue />
				<IconGitVue />
				<IconNpmVue />
				<IconVscodeVue />
				<IconFigmaVue />
				<IconPostmanVue />
				<IconTerminalVue />
			</div>
			<div class="div"></div>
		</div>
		<div class="section_3">
			<h1>MIS PROYECTOS</h1>
			<p>
				En esta sección encontraras algunos de mis proyectos, los cuales están
				enfocados en el desarrollo web. Estos proyectos fueron elaborados con el
				fin de aprender y mejorar mis habilidades en el desarrollo web.
			</p>

			<div class="projects">
				<article
					class="item_project"
					v-for="project in projects"
					:key="project.name"
				>
					<h2>{{ project.name }}</h2>
					<p>
						{{ project.description }}
					</p>
					<div>
						<p
							v-for="(tec, index) in project.technologies"
							:key="tec[index]"
						>
							{{ tec }}
						</p>
					</div>

					<a
						href="{{ project.link }}"
						target="_blank"
						>Ver proyecto</a
					>
				</article>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.draw_svg {
		position: absolute;
		bottom: 5%;
		right: 2.55%;

		stroke-dasharray: 242;
		stroke-dashoffset: 242;
		animation: draw 3s ease-in-out;
		animation-fill-mode: forwards;
	}

	@-webkit-keyframes draw {
		to {
			stroke-dashoffset: 0;
		}
	}
	.details_section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 5% 15%;
		text-align: justify;
		z-index: 0;
	}
	h1 {
		font-family: "Padauk", "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
			"Hiragino Sans", Meiryo, sans-serif;
		font-style: oblique;
		font-weight: 700;
		font-size: 3vw;
		letter-spacing: 0.01em;
		-webkit-text-stroke-width: 0.3px;
		-webkit-text-stroke-color: #000000;
	}

	p {
		font-family: "Padauk", "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
			"Hiragino Sans", Meiryo, sans-serif;
		padding-left: 4%;
		line-height: 1.3em;
		font-weight: 300;
		font-size: 1.6vw;
		-webkit-text-stroke-width: 0.3px;
		-webkit-text-stroke-color: #000000;
	}

	.icons_skills {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		align-items: center;
		gap: 20px;
		padding-top: 20px;
		padding-bottom: 20px;
	}

	.item_project {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 10px;
		padding: 10px;
		/* border: 1px solid #ffffff; */
		box-shadow: inset 0 0 0 1px #ffffff;
		border-radius: 10px;
		/* background-color: #ffffff; */
		width: 280px;
		height: 400px;
		/* color: #000000; */
		outline-style: outset;
	}
	.item_project > h2 {
		font-weight: 700;
		font-size: 1.5rem;
		font-style: italic;
		letter-spacing: -0.08em;
	}

	.item_project > a {
		text-decoration: none;
		color: #000000;
		font-weight: 700;
		font-size: 1.2rem;
		font-style: italic;
		letter-spacing: -0.08em;
	}
	.item_project > div {
		display: flex;
		flex-wrap: wrap;
	}

	.projects {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		align-items: center;
		gap: 20px;
		padding-top: 10px;
	}
</style>
