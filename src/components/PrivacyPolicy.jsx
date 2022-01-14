import React from 'react';
// import { Helmet, HelmetProvider } from 'react-helmet-async';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@mui/material/CardContent';
import Footer from './Footer';
import Header from './Header';

const PrivacyPolicy = function () {
  return (

    <div className="container">
      <Header />

      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <div className="about_container">
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <h1>プライバシーポリシー</h1>
                技術書おすすめまとめ（以下、「当サイト」と言います。）では、お客様からお預かりする個人情報の重要性を強く認識し、個人情報の保護に関する法律、その他の関係法令を遵守すると共に、以下に定めるプライバシーポリシーに従って、個人情報を安全かつ適切に取り扱うことを宣言いたします。
                <h2>個人情報の定義</h2>
                本プライバシーポリシーにおいて、個人情報とは生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、メールアドレス等、特定の個人を識別することができるものをいいます。
                <h2>個人情報の管理</h2>
                お客様からお預かりした個人情報は、不正アクセス、紛失、漏えい等が起こらないよう、慎重かつ適切に管理します。
                <h2>個人情報の利用目的</h2>
                当サイトでは、お客様からのお問い合わせやサービスへのお申し込み等を通じて、お客様の氏名、生年月日、住所、電話番号、メールアドレス等の個人情報をご提供いただく場合があります。その場合は、以下に示す利用目的のために、適正に利用するものと致します。
                <ul>
                  <li>お客様からのお問い合わせ等に対応するため。</li>
                  <li>お客様からお申し込みいただいたサービス等の提供のため。</li>
                  <li>メールマガジン等の配信、セミナーやイベントのご案内等のため。</li>
                  <li>当サイトが実施するアンケートへのご協力のお願いのため</li>
                  <li>商品や景品、プレゼント等の発送のため。</li>
                  <li>当サイトのサービス向上・改善、新サービスを検討するための分析等を行うため。</li>
                  <li>個人を識別できない形で統計データを作成し、当サイトおよびお客様の参考資料とするため。</li>
                </ul>
                <h2>個人情報の第三者提供</h2>
                お客様からお預かりした個人情報を、個人情報保護法その他の法令に基づき開示が認められる場合を除き、ご本人様の同意を得ずに第三者に提供することはありません。
                <h2>個人情報の開示・訂正・削除について</h2>
                お客様からお預かりした個人情報の開示・訂正・削除をご希望の場合は、ご本人様よりお申し出ください。適切な本人確認を行った後、速やかに対応させていただきます。
                <h2>本ポリシーの変更</h2>
                当サイトは、法令の制定、改正等により、本ポリシーを適宜見直し、予告なく変更する場合があります。本ポリシーの変更は、変更後の本ポリシーが当サイトに掲載された時点、またはその他の方法により変更後の本ポリシーが閲覧可能となった時点で有効になります。
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
