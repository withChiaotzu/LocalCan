<script setup lang="ts">
import { onMounted } from 'vue'
import NavLink from './components/NavLink.vue'

function getTheme(matches: boolean) {
	const mode = matches ? 'dark' : 'light'
	if (mode === 'dark')
		document.body.classList.add('dark')
	else
		document.body.classList.remove('dark')
}

onMounted(() => {
	getTheme(window.matchMedia('(prefers-color-scheme: dark)').matches)
	// 监听系统主题变化
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => getTheme(e.matches))

	const target = document.querySelector('.tags') as HTMLElement
	const { top, height } = target.getBoundingClientRect()
	const inner = [...document.querySelectorAll('.tag-inner')] as HTMLElement[]
	const rotate = [5, -10, -5, 12]

	// 监听滚动事件
	window.addEventListener('scroll', () => {
		const x = (window.scrollY - top + 200) / (200 + height)
		if (window.scrollY < top + height && window.scrollY > top - 200) {
			inner.forEach((el, i) => {
				switch (i) {
					case 0:
						el.style.transform = `rotate(${rotate[i] + x * 20}deg) translateX(-${x * 240}px) scale(${1 + x * 0.2})`
						el.style.filter = `blur(${x * 10}px)`
						break
					case 1:
						el.style.transform = `rotate(${rotate[i] - x * 20}deg) translateX(${x * 240}px) scale(${1 + x * 0.2})`
						el.style.filter = `blur(${x * 10}px)`
						break
					case 2:
						el.style.transform = `rotate(${rotate[i] - x * 20}deg) translateX(-${x * 240}px) scale(${1 + x * 0.2})`
						el.style.filter = `blur(${x * 10}px)`
						break
					case 3:
						el.style.transform = `rotate(${rotate[i] + x * 20}deg) translateX(${x * 240}px) scale(${1 + x * 0.2})`
						el.style.filter = `blur(${x * 10}px)`
				}
			})
		}
	})
})

// logo 地址
const logo = new URL('/localCan.svg', import.meta.url).href
</script>

<template>
	<main
		m="x-24px"
		pt-18 font-sans
	>
		<NavLink />
		<section
			flex="~ col items-center gap-6"
			m-x-auto max-w-6xl w-full
		>
			<a
				href="/changelog"
				p="4px"
				text-primaryAccent text-14px
				bg="primaryAccent opacity-10"
				border="~ solid 1px primaryAccent opacity-20"
				rounded="[8px]"
				m="t--53px b-40px"
				flex="~ items-center gap-1.5"
			>
				<span
					bg="primaryAccent"
					p="x-5px y-2px"
					text-primarySurface rounded-1 font-normal
				>New</span>
				Public URLs on custom domains!
				<div inline-block class="i-carbon-earth" />
			</a>
			<div
				flex="~ col justify-center items-center gap-3"
				mb-10
			>
				<img
					:src="logo" alt="LocalCan"
					h-20 w-20
				>
				<span
					relative text-6 font-700 tracking-tighter
				>
					LocalCan
					<span
						absolute
						right--12px
						text-8px
						font-normal
						tracking-wide
					>TM</span>
				</span>
			</div>
			<div
				class="tags"
				relative
			>
				<h1
					max-w-18ch linear-text p-1 text-center text-18 leading-20 h1
				>
					Develop apps using Public URLs
				</h1>
				<div class="tag">
					<div
						class="tag-inner"
						p="x-8px y-2px"
						border="~ solid 1px transparent"
						orangeGradientBorder absolute left--64px top--60px inline-block rotate-5 rounded-full
					>
						<div
							flex="~ inline items-center"
							orangeGradient linear-text text-5
						>
							<p class="i-carbon-portfolio" orangeGradient mr-1 />
							<p>portfolio.</p>
							<small>local</small>
						</div>
					</div>
				</div>
				<div class="tag">
					<div
						class="tag-inner"
						p="x-8px y-2px"
						border="~ solid 1px transparent"
						greenGradientBorder absolute right--64px top--60px inline-block rotate--10 rounded-full
					>
						<div
							flex="~ inline items-center"
							greenGradient linear-text text-5
						>
							<p class="i-carbon-location-filled" greenGradient mr-1 />
							<p>local.</p>
							<small>myapp.com</small>
						</div>
					</div>
				</div>
				<div class="tag">
					<div
						class="tag-inner"
						p="x-8px y-2px"
						border="~ solid 1px transparent"
						purpleGradientBorder absolute bottom--60px left--64px inline-block rotate--5 rounded-full
					>
						<div
							flex="~ inline items-center"
							purpleGradient linear-text text-5
						>
							<p class="i-carbon-progress-bar-round" purpleGradient mr-1 />
							<p>app.journal.</p>
							<small>local</small>
						</div>
					</div>
				</div>
				<div class="tag">
					<div
						class="tag-inner"
						p="x-8px y-2px"
						border="~ solid 1px transparent"
						blueGradientBorder absolute bottom--60px right--64px inline-block rotate-12 rounded-full
					>
						<div
							flex="~ inline items-center"
							blueGradient linear-text text-5
						>
							<p class="i-carbon-locked" blueGradient mr-1 />
							<p>api-22.</p>
							<small>localcan.dev</small>
						</div>
					</div>
				</div>
			</div>
			<h2
				text="primaryMain opacity-80"
				max-w-52ch text-6 font-thin
			>
				...and .local domains with https
			</h2>
			<div
				p="t-32px b-24px"
				flex="~ items-center gap-4"
			>
				<a
					p="x-24px y-16px"
					text-primarySurface cursor-pointer rounded-full text-5 font-bold transition cta hover:scale-105
				>Buy $47 <del opacity-50>$60</del>
				</a>
				<a
					p="x-24px y-16px"
					bg="primaryMain opacity-10"
					text-primaryMain cursor-pointer rounded-full text-5 transition hover:scale-105
				>Download Trial</a>
			</div>
		</section>
		<section h-100vh />
	</main>
</template>
