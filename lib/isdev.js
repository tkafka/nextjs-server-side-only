let isdev = false

if (process && process.env.NODE_ENV === 'development') {
	isdev = true
}

export { isdev }
