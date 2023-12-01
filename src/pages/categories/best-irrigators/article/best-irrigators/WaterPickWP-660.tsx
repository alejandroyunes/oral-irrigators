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
  waterpikWp66Props,
  proAndCons,
  waterPikWP660ProductUrl,
  waterPik660productReview,
  titleListWaterpikWP660Props,
} from "./data/waterpikwp660"

export default function () {
  return (
    <main>
      <HelmetProvider>
        <Helmet>
          <meta
            name='description'
            content='The easy and more effective way to floss, the Waterpik Aquarius Water Flosser features advanced technology and a compact, contemporary design.' />
          <title>WaterPik Aquarius WP-660 features advanced technology and a compact, contemporary design.</title>
        </Helmet>
      </HelmetProvider>

      <Header {...headerProps} />
      <TableOfContent items={tableOfContentItems} />
      <Title message={titleProps.message} titleH2={titleProps.title} id={titleProps.id} />

      <Product {...waterpikWp66Props.product} list={waterpikWp66Props.list} />

      <TitleList {...titleListProps} id={titleListProps.id} />

      <Title titleH2={proAndCons.title} id={proAndCons.id} />
      <ProAndCon {...proAndCons} />
      <SimpleButton blank text="View all Reviews" url={waterPik660productReview} />

      <Title id={comparativeTableProps.id} titleH2={comparativeTableProps.title} message={comparativeTableProps.message} />
      <ComparativeTable items={comparativeTableProps.items} primeUrl={comparativeTableProps.primeUrl} />

      <TitleList {...titleListWaterpikWP660Props} id={titleListWaterpikWP660Props.id} />

      <AmazonButton text="Buy in Amazon" url={waterPikWP660ProductUrl} blank />
    </main>
  )
}