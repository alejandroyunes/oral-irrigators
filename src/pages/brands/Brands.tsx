import { Helmet, HelmetProvider } from "react-helmet-async"
import Header from "../../components/Article/article-header/Header"
import ComparativeTable from "../../components/CompartiveProducts/ComparativeTable"
import ProAndCon from "../../components/ProAndCon/ProAndCon"
import Product from "../../components/Product/Product"
import TableOfContent from "../../components/TableOfContent/TableOfContent"
import Title from "../../components/Title/Title"
import TitleList from "../../components/TitleList/TitleList"
import { tableOfContentItems, headerProps, titleProps, comparativeTableProps, titleListProps, firstProduct, secondProduct, thirdProduct, fourthProduct, comparativeTableTwoProps } from "./brands"

export default function () {
  return (
    <main>
      <HelmetProvider>
        <Helmet>
          <meta
            name='description'
            content='Comparison of the Best Irrigators in 2023 | Dental Irrigator' />
          <title>Discover the Ultimate Oral Care: Unveiling the Best Brands of Oral Irrigators</title>
        </Helmet>
      </HelmetProvider>

      <Header {...headerProps} />
      <TableOfContent items={tableOfContentItems} />

      {/* First Product */}
      <Title titleH2={firstProduct.proAndCons.title} message={firstProduct.proAndCons.subtitle} id={firstProduct.product.id} />

      <Title titleH2={comparativeTableProps.title} message={comparativeTableProps.message} />
      <ComparativeTable items={comparativeTableProps.items} primeUrl={comparativeTableProps.primeUrl} />


      {/* Second Product */}

      <Title titleH2={secondProduct.proAndCons.title} message={secondProduct.proAndCons.subtitle} id={secondProduct.product.id} />

      <Title titleH2={comparativeTableTwoProps.title} message={comparativeTableTwoProps.message} />
      <ComparativeTable items={comparativeTableTwoProps.items} primeUrl={comparativeTableTwoProps.primeUrl} />



      {/* Third Product */}

      {/* <Title titleH2={thirdProduct.proAndCons.title} message={thirdProduct.proAndCons.subtitle} id={thirdProduct.product.id} />
      <Product {...thirdProduct.product} list={thirdProduct.list} />
      <Title {...thirdProduct.productDetails} />
      <ProAndCon {...thirdProduct.proAndCons} />


      <Title titleH2={fourthProduct.proAndCons.title} message={fourthProduct.proAndCons.subtitle} id={fourthProduct.product.id} />
      <Product {...fourthProduct.product} list={fourthProduct.list} />
      <Title {...fourthProduct.productDetails} />
      <ProAndCon {...fourthProduct.proAndCons} /> */}


      <TitleList {...titleListProps} />
      <Title message={titleProps} />

    </main>
  )
}