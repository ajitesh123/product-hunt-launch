import ProductHuntEmbed from '../components/product-hunt-embed'

interface ProductHuntPageProps {
  defaultLogo: string
  defaultPhLink: string
  defaultPhBadgeUrl: string
}

export default async function ProductHuntPage() {
  // These values are now handled server-side
  const defaultConfig = {
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-qSap48M4U2sMdTOgDgAAZYC9UZCW2S.png",
    phLink: "https://www.producthunt.com/posts/tough-tongue-ai-2-0?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tough&#0045;tongue&#0045;ai&#0045;2&#0045;0",
    phBadgeUrl: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=775464&theme=light&t=1738954913772",
    backgroundColor: "#000000"
  }

  return <ProductHuntEmbed defaultConfig={defaultConfig} />
} 