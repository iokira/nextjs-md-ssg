import createMDX from '@next/mdx'

const nextConfig = {
    output: 'export',
    pageExtensions: [
        'js', 'jsx', 'ts', 'tsx', 'md', 'mdx'
    ]
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
