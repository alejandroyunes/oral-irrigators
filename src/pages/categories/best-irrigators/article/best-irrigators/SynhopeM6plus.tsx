import { HelmetProvider, Helmet } from "react-helmet-async"
import Header from "../../../../../components/Article/article-header/Header"
import AmazonButton from "../../../../../components/Button/AmazonButton/AmazonButton"
import SimpleButton from "../../../../../components/Button/SimpleButton/SimpleButton"
import ComparativeTable from "../../../../../components/CompartiveProducts/ComparativeTable"
import ProAndCon from "../../../../../components/ProAndCon/ProAndCon"
import Product from "../../../../../components/Product/Product"
import TableOfContent from "../../../../../components/TableOfContent/TableOfContent"
import Title from "../../../../../components/Title/Title"
import TitleList from "../../../../../components/TitleList/TitleList"

import {
  tableOfContentItems,
  headerProps,
  titleProps,
  comparativeTableProps,
  titleListProps,
  synhopem6Props,
  proAndCons,
  titleListSynhopeM6Props,
  synhopem6ProductUrl,
  synhopem6productReview,
} from "./data/synhopeM6Plus"

export default function () {
  return (
    <main>
      <HelmetProvider>
        <Helmet>
          <meta
            name='description'
            content='Synhope M6plus, 150ml' />
          <title>Synhope M6plus Design for home and travel. Safety certified batteries offer 60 times flossing by one full charged.</title>
        </Helmet>
      </HelmetProvider>

      <Header {...headerProps} />
      <TableOfContent items={tableOfContentItems} />
      <Title message={titleProps.message} titleH2={titleProps.title} id={titleProps.id} />

      <Product {...synhopem6Props.product} list={synhopem6Props.list} />

      <TitleList {...titleListProps} id={titleListProps.id} />

      <Title titleH2={proAndCons.title} id={proAndCons.id} />
      <ProAndCon {...proAndCons} />
      <SimpleButton blank text="View all Reviews" url={synhopem6productReview} />

      <Title id={comparativeTableProps.id} titleH2={comparativeTableProps.title} message={comparativeTableProps.message} />
      <ComparativeTable items={comparativeTableProps.items} primeUrl={comparativeTableProps.primeUrl} />

      <TitleList {...titleListSynhopeM6Props} id={titleListSynhopeM6Props.id} />

      <AmazonButton text="Buy in Amazon" url={synhopem6ProductUrl} blank />
    </main>
  )
}