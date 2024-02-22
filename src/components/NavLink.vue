<script setup lang="ts"></script>

<template>
	<nav pointer-events-none fixed left-0 right-0 top-0 z-100>
		<div
			p-4
			flex="~ items-center justify-end"
		>
			<div />
			<div
				p="x-4 y-2"
				flex="~ items-center gap-6"
				font="500"
				text="primaryMain 14px"
				rounded="[16px]"
				bg="primarySurfaceMenu opacity-40"
			>
				<a href="/docs">Docs</a>
				<a href="/changelog">Changelog</a>
			</div>
		</div>
	</nav>
</template>
