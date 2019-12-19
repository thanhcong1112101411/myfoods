<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class React extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
		$this->load->helper('url');	
        $this->load->model('M_data');
		$this->load->library('session');
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        $method = $_SERVER['REQUEST_METHOD'];
        if($method == "OPTIONS") {
            die();
        }
	}
	public function index()
	{
		echo "Welcome To MyFoods Server";
	}
    public function newProducts(){
        $quantityData = json_decode(file_get_contents("php://input"), true);
        $quantity = $quantityData["quantity"];
        $queryNew = "SELECT products.IdProduct,products.Images, products.Name, products.Price, products.rrp, products.AddedDate, discountapply.Quantum from products LEFT JOIN detaildiscount ON products.idProduct = detaildiscount.idProduct LEFT JOIN discountApply on detaildiscount.idDiscount = discountApply.idDiscount left join company on products.IdCompany = company.Id where products.Hidden = 0 and company.statusCompany = 0 order by products.AddedDate desc limit ".$quantity;
        $data = $this->M_data->load_query($queryNew);
        echo json_encode($data);
    }
    // product detail
    public function productDetail($id=""){
        $query = "SELECT * from (SELECT products.IdProduct AS productId,products.Description, products.Description2, products.Name, products.Images, products.Price, products.rrp, unit.unitName, brand.brandName, company.companyName,company.companyLink, company.Id, company.companyLogo from products, unit, brand, company WHERE products.IdUnit = unit.IdUnit and products.IdBrand = brand.IdBrand and products.IdCompany = company.Id and products.IdProduct = '".$id."') as productInf LEFT JOIN detaildiscount ON productInf.productId = detaildiscount.IdProduct LEFT JOIN (SELECT discountapply.IdDiscount, discountapply.Quantum from discountapply) as discountInf on detaildiscount.IdDiscount = discountInf.IdDiscount";
        $data = $this->M_data->load_query($query);
        echo json_encode($data);
    }
    // company inf
    public function company($companyLink=""){
        $queryInf = "SELECT * from company WHERE company.companyLink = '".$companyLink."' and statusCompany = 0";
        $data["companyInf"] = $this->M_data->load_query($queryInf);

        $queryNewProduct = "SELECT * from (SELECT products.IdProduct as productId, products.Name, products.Price, products.rrp, products.Images, products.AddedDate from products WHERE products.hidden = 0 and products.IdCompany = (SELECT Id FROM company WHERE company.companyLink = '".$companyLink."')) as productInf LEFT JOIN (SELECT discountapply.IdDiscount, discountapply.Quantum from discountapply) as discountInf on productInf.productId = discountInf.Quantum LEFT JOIN detaildiscount on discountInf.IdDiscount = detaildiscount.IdDiscount order by productInf.AddedDate limit 4";
        $data["newproducts"] = $this->M_data->load_query($queryNewProduct);

        $queryProduct = "SELECT * from (SELECT products.IdProduct as productId, products.Name, products.Price, products.rrp, products.Images, products.AddedDate from products WHERE products.hidden = 0 and products.IdCompany = (SELECT Id FROM company WHERE company.companyLink = '".$companyLink."')) as productInf LEFT JOIN (SELECT discountapply.IdDiscount, discountapply.Quantum from discountapply) as discountInf on productInf.productId = discountInf.Quantum LEFT JOIN detaildiscount on discountInf.IdDiscount = detaildiscount.IdDiscount";
        $data["products"] = $this->M_data->load_query($queryProduct);

        $queryNews = "SELECT * from news WHERE news.IdCompany = (SELECT company.Id FROM company WHERE company.companyLink = '".$companyLink."')";
        $news = $this->M_data->load_query($queryNews);
        $newsList = [];
        for($i=0; $i<count($news); $i++){
            $newsItem = $news[$i];

            $images["images"] = [];
            $link = scandir("public/images/newsImage/".$companyLink."/".$news[$i]["newsImages"]);
            $files = array_diff($link, array('.','..'));
            foreach ($files as $file) {
                $image = $file;
                array_push($images["images"], $image);
                
            }
            $mix = array_merge($newsItem, $images);
            // array_push($newsItem, $images["images"]);
            array_push($newsList, $mix);
            
        }
        $data["newsList"] = $newsList;


        echo json_encode($data);
    }
    //------------------------------- GET NEWS --------------------------
    public function getNews(){
        $queryNews = "SELECT * from news order by idNew desc";
        $news = $this->M_data->load_query($queryNews);
        $newsList = [];
        for($i=0; $i<count($news); $i++){
            $newsItem = $news[$i];
            // get companyLink của từng Cty
            $idCompany = $news[$i]["IdCompany"];
            $queryCompany = "select * from company where Id = '".$idCompany."'";
            $companyInf = $this->M_data->load_query($queryCompany);
            $companyLink = $companyInf[0]["companyLink"];

            $images["images"] = [];
            //lấy $logo, $companyName
            $logo = $companyInf[0]["companyLogo"];
            $companyName = $companyInf[0]["companyName"];

            $inf["logo"] = $logo;
            $inf["companyName"] = $companyName;
            $inf["companyLink"] = $companyLink;
            
            $mix1 = array_merge($newsItem, $inf);


            $link = scandir("public/images/newsImage/".$companyLink."/".$news[$i]["newsImages"]);
            $files = array_diff($link, array('.','..'));
            foreach ($files as $file) {
                $image = $companyLink."/".$news[$i]["newsImages"]."/".$file;
                array_push($images["images"], $image);
                
            }
            $mix2 = array_merge($mix1, $images);
            // array_push($newsItem, $images["images"]);
            array_push($newsList, $mix2);
            
        }
        echo json_encode($newsList);
    }
    //------------------------------- GET CATAGORY ----------------------
    public function catagory(){
        $query = "select * from catagory";
        $data = $this->M_data->load_query($query);
        echo json_encode($data);
    }
    //------------------------------- GET PRODUCTS ---------------------
    public function filterProducts(){
        $data = json_decode(file_get_contents("php://input"), true);
        $portfolios = $data["portfolios"];
        $price = $data["price"];
        $search = $data["searchValue"];

        
        $query = "SELECT * FROM (SELECT products.IdProduct as productId, products.Name, products.Price, products.rrp, products.Images, brand.brandName, unit.unitName, company.Id, company.companyName, catagory.IdCatagory FROM products, catagory, unit ,brand, company WHERE products.IdUnit = unit.IdUnit and products.IdCatagory = catagory.IdCatagory and products.IdBrand = brand.IdBrand and products.IdCompany = company.Id and products.Hidden = 0 and company.statusCompany = 0 and (products.Name like '%".$search."%' OR catagory.catagoryName LIKE '%".$search."%') ) as productInf LEFT JOIN (SELECT discountapply.IdDiscount, discountapply.IdCompany, discountapply.Quantum FROM discountapply) as discountInf ON productInf.Id = discountInf.IdCompany LEFT JOIN detaildiscount ON discountInf.IdDiscount = detaildiscount.IdDiscount";

        $price = trim($price);
        
        $portfoliosArray = explode(",",$portfolios);
        
        if($portfolios != ""){
                $query .= " where (";
                for($i=0; $i<count($portfoliosArray); $i++){
                    if($i == count($portfoliosArray) - 1){
                        $query .= "productInf.IdCatagory = ".$portfoliosArray[$i].")";
                    }
                    else{
                        $query .= "productInf.IdCatagory = ".$portfoliosArray[$i]." or ";
                    }
                }
            }
        
        
        if($price != "default"){
            $query.= " order by productInf.Price";
            if($price == "decrease"){
                $query.=" desc";
            }
            if($price == "increase"){
                $query.=" asc";
            }
        }
        $data  = $this->M_data->load_query($query);
        echo json_encode($data);
    }
    // login
    public function userLogin(){
        $inforUser = json_decode(file_get_contents("php://input"), true);
        $username = $inforUser["username"];
        $pass = $inforUser["password"];
        
        $query = "select * from accountcustomers where username='".$username."' and password = '".$pass."'";
        $data = $this->M_data->load_query($query);
        if(count($data) > 0){
            $arrUser["id"] = $data[0]["id_customer"];
            $arrUser['username'] = $data[0]['username'];
    
            echo json_encode($arrUser);
            exit();
        }
        echo 1;// tài khoản không tồn tại
        
    }
    // company login

    public function companyLogin(){
        $inforUser = json_decode(file_get_contents("php://input"), true);
        $username = $inforUser["username"];
        $pass = $inforUser["password"];
     
        $query = "SELECT * FROM company WHERE usernameCompany ='".$username."' and passwordCompany = '".$pass."' and statusCompany = 0";
        $data = $this->M_data->load_query($query);
        if(count($data) > 0){
            $arrUser["id"] = $data[0]["Id"];
            $arrUser['username'] = $data[0]['usernameCompany'];
    
            echo json_encode($arrUser);
            exit();
        }
        echo 1;// tài khoản không tồn tại
    }
    // get company products with hidden
    public function companyProductsAdmin(){
        $infor = json_decode(file_get_contents("php://input"), true);
        $idCompany = $infor["idCompany"];
        $hidden = $infor["hidden"];
     
        $query = "SELECT * FROM (SELECT products.IdProduct as productId, products.Name, products.Price, products.rrp, products.quantityProduct, products.Images, products.AddedDate, brand.brandName, unit.unitName, company.Id, company.companyName, catagory.IdCatagory FROM products, catagory, unit ,brand, company WHERE products.IdUnit = unit.IdUnit and products.IdCatagory = catagory.IdCatagory and products.IdBrand = brand.IdBrand and products.IdCompany = company.Id and products.Hidden = '".$hidden."' and products.IdCompany = '".$idCompany."') as productInf LEFT JOIN (SELECT discountapply.IdDiscount, discountapply.IdCompany, discountapply.Quantum FROM discountapply) as discountInf ON productInf.Id = discountInf.IdCompany LEFT JOIN detaildiscount ON discountInf.IdDiscount = detaildiscount.IdDiscount order by productInf.AddedDate desc";
        $data = $this->M_data->load_query($query);
        echo json_encode($data);
    }
    // get brand, unit, catagory
    public function getPublicInfProduct(){
        // catagory
        $queryCatagory = "SELECT catagory.IdCatagory as value, catagory.catagoryName as displayValue FROM catagory";
        $data["catagory"] = $this->M_data->load_query($queryCatagory);
        // brand
        $queryBrand = "SELECT brand.IdBrand as value, brand.brandName as displayValue FROM brand";
        $data["brand"] = $this->M_data->load_query($queryBrand);
        // unit
        $queryUnit = "SELECT unit.IdUnit as value, unit.unitName as displayValue FROM unit";
        $data["unit"] = $this->M_data->load_query($queryUnit);
        
        echo json_encode($data);
    }
    // ------------------ add product
    public function addProduct(){
        $infor = json_decode(file_get_contents("php://input"), true);

        $data["Images"] = $infor["image"]["fileName"];
        // Them anh vao folder
        $image = $infor["image"]["file"];
        $img = str_replace('data:image/png;base64,', '', $image);
        $img = str_replace(' ', '+', $img);
        file_put_contents("./public/images/products/".$data["Images"], base64_decode($img));
        // lay cac gia tri
        $data["Name"] = $infor["name"];
        $data["Price"] = (int)$infor["price"];
        $data["rrp"] = (int)$infor["rrp"];
        $data["Hidden"] = (int)$infor["hidden"];
        $data["quantityProduct"] = (int)$infor["quantity"];
        $data["idCatagory"] = (int)$infor["catagory"];
        $data["idUnit"] = (int)$infor["unit"];
        $data["idBrand"] = (int)$infor["brand"];
        $data["idCompany"] = (int)$infor["company"];

        $id = $this->M_data->insert('products',$data);
        if($id){
            echo $id;
        }else{
            echo 0;
        }
    }
    // ------------------------ delete product ----------------------
    public function deleteProduct(){
        $infor = json_decode(file_get_contents("php://input"), true);

        $idProduct = $infor["idProduct"];
        $this->M_data->deleteProduct($idProduct,"products");
        echo 1;
    }
    //------------------ get update product inf ------------------
    public function getProductInf(){
        $infor = json_decode(file_get_contents("php://input"), true);

        $idProduct = $infor["idProduct"];
        $query = "select * from products where idProduct = '".$idProduct."'";
        $productInf = $this->M_data->load_query($query);
        echo json_encode($productInf);
    }
    // ------------------ update product------------------------
    public function updateProduct(){
        $infor = json_decode(file_get_contents("php://input"), true);

        if($infor["image"]["file"]){
            $data["Images"] = $infor["image"]["fileName"];
            // Them anh vao folder
            $image = $infor["image"]["file"];
            $img = str_replace('data:image/png;base64,', '', $image);
            $img = str_replace(' ', '+', $img);
            file_put_contents("./public/images/products/".$data["Images"], base64_decode($img));
        }
        
        // lay cac gia tri
        $data["Name"] = $infor["name"];
        $data["Price"] = (int)$infor["price"];
        $data["rrp"] = (int)$infor["rrp"];
        $data["Hidden"] = (int)$infor["hidden"];
        $data["quantityProduct"] = (int)$infor["quantity"];
        $data["idCatagory"] = (int)$infor["catagory"];
        $data["idUnit"] = (int)$infor["unit"];
        $data["idBrand"] = (int)$infor["brand"];

        $idProduct = (int)$infor["idProduct"];

        $id = $this->M_data->updateProduct($idProduct,'products',$data);
        echo 1;
    }
    // get company news in company
    public function getCompanyNewsAdmin(){
        $infor = json_decode(file_get_contents("php://input"), true);
        $idCompany = $infor["idCompany"];

        $queryCompany = "select companyLink from company where Id = '".$idCompany."'";
        $companyLink = $this->M_data->load_query($queryCompany);
        $companyLink = $companyLink[0]["companyLink"];

        $queryNews = "SELECT * from news WHERE news.IdCompany = '".$idCompany."' order by IdNew desc";
        $news = $this->M_data->load_query($queryNews);
        $newsList = [];
        for($i=0; $i<count($news); $i++){
            $newsItem = $news[$i];

            $images["images"] = [];
            $link = scandir("public/images/newsImage/".$companyLink."/".$news[$i]["newsImages"]);
            $files = array_diff($link, array('.','..'));
            foreach ($files as $file) {
                $image = $companyLink ."/". $newsItem["newsImages"] ."/". $file;
                array_push($images["images"], $image);
                
            }
            $mix = array_merge($newsItem, $images);
            // array_push($newsItem, $images["images"]);
            array_push($newsList, $mix);
            
        }
        $data = $newsList;
        echo json_encode($data);
    }
    //---------------------- add news -------------------------
    public function addNews(){
        $infor = json_decode(file_get_contents("php://input"), true);

        // thêm folder chứa ảnh tin tức - theo id của news
        $idCompany = $infor["idCompany"];
        // lấy companyLink
        $queryCompany = "select companyLink from company where Id = '".$idCompany."'";
        $companyLink = $this->M_data->load_query($queryCompany);
        $companyLink = $companyLink[0]["companyLink"];

        // Thêm news thiếu newsimages
        $data["newsTitle"] = $infor["title"];
        $data["newsContent"] = $infor["content"];
        $data["IdCompany"] = $idCompany;

        $id = $this->M_data->insert('news',$data);

        // update news mới thêm (thêm newsimages)
        $dataUpdate["newsImages"] = $id;
        $this->M_data->updateNews($id,'news',$dataUpdate);
        // tạo folder chứa ảnh
        mkdir("public/images/newsImage/".$companyLink."/".$id);

        // thêm image vào foler chứa ảnh vừa tạo
        $imageArr = $infor["image"];
        for($i = 0; $i<count($imageArr); $i++){
            $fileName = $imageArr[$i]["fileName"];

            $image = $imageArr[$i]["file"];
            $img = str_replace('data:image/png;base64,', '', $image);
            $img = str_replace(' ', '+', $img);
            file_put_contents("./public/images/newsImage/".$companyLink."/".$id."/".$fileName, base64_decode($img));
        }
        
        echo 1;
    }
    // ------------------------ delete product ----------------------
    public function deleteNews(){
        $infor = json_decode(file_get_contents("php://input"), true);

        $idNews = $infor["idNews"];
        $this->M_data->deleteNews($idNews,"news");
        echo 1;
    }
    //----------------------------------------- ADMIN -------------------------------
    //------------------- get company confirmed and wating ---------
    public function getCompanyAdmin(){
        $queryWating = "SELECT * FROM company WHERE statusCompany = 1";
        $data["companyWating"] = $this->M_data->load_query($queryWating);

        $queryConfirmed = "SELECT * FROM company WHERE statusCompany = 0";
        $data["companyConfirmed"] = $this->M_data->load_query($queryConfirmed);

        echo json_encode($data);
    }
    public function getAddress(){
        function testAddress($link){
            $curl = curl_init();
            curl_setopt_array($curl, array(
              CURLOPT_URL => $link,
              CURLOPT_RETURNTRANSFER => true,
              CURLOPT_ENCODING => "",
              CURLOPT_MAXREDIRS => 10,
              CURLOPT_TIMEOUT => 30,
              CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
              CURLOPT_CUSTOMREQUEST => "GET",
              CURLOPT_HTTPHEADER => array(
                "Accept: */*",
                "Accept-Encoding: gzip, deflate",
                "Cache-Control: no-cache",
                "Connection: keep-alive",
                "Host: thongtindoanhnghiep.co",
                "Postman-Token: 9b2ef605-2ed6-47c4-886d-b4e11b1ba0e4,b4d0e121-24b4-4fcd-9ea6-d15f2b6f3cfa",
                "User-Agent: PostmanRuntime/7.19.0",
                "cache-control: no-cache"
              ),
            ));

            $response = curl_exec($curl);
            $err = curl_error($curl);
            curl_close($curl);

            if ($err) {
                echo "cURL Error #:" . $err;
            } else {
                return $response;
            }
        }
        $id = $this->session->userdata("user")["id"];
        $query = "select * from customers where id_customer = '".$id."'";
        $customer = $this->M_data->load_query($query);

        $data["ward"] = testAddress("https://thongtindoanhnghiep.co/api/ward/".$customer[0]["ward"]);
        $data["district"] = testAddress("https://thongtindoanhnghiep.co/api/district/".$customer[0]["district"]);
        $data["city"] = testAddress("https://thongtindoanhnghiep.co/api/city/".$customer[0]["city"]);
        echo json_encode($data);
    }
    //---------------------- signIn company ---------------------------------
    public function signInCompany(){
        $infor = json_decode(file_get_contents("php://input"), true);

        $data["companyName"] = $infor["companyName"];
        $data["companyLink"] = $infor["link"];
        $data["companyEmail"] = $infor["email"];
        $data["companyTel"] = $infor["phone"];
        $data["usernameCompany"] = $infor["username"];
        $data["passwordCompany"] = $infor["password"];

        $queryCompany = "select * from company where companyLink = '". $data["companyLink"]."' or usernameCompany = '". $data["usernameCompany"]."'";
        $company = $this->M_data->load_query($queryCompany);
        if(count($company) > 0){
            echo 0;
            exit();
        }

        $id = $this->M_data->insert('company',$data);
        if($id){
            echo $id;
        }else{
            echo 0;
        }
    }
    public function confirmCompany(){
        $infor = json_decode(file_get_contents("php://input"), true);
        $idCompany = $infor["idCompany"];
        // thêm folder chứa ảnh tin tức
        $queryCompany = "select companyLink from company where Id = '".$idCompany."'";
        $companyLink = $this->M_data->load_query($queryCompany);
        $companyLink = $companyLink[0]["companyLink"];

        mkdir("public/images/newsImage/".$companyLink);

        $data["statusCompany"] = 0;
        $this->M_data->updateCompany($idCompany,'company',$data);
        echo 1;
    }
    public function getInfoSearch(){
        $infor = json_decode(file_get_contents("php://input"), true);

        $searchValue = $infor["searchValue"];


        $queryCompany = "select * from company where companyName like '%".$searchValue."%' and statusCompany = 0 limit 10";
        $data["companySearch"] = $this->M_data->load_query($queryCompany);

        $queryProduct = "select * from products where Name like '%".$searchValue."%' limit 10";
        $data["productSearch"] = $this->M_data->load_query($queryProduct);

        $queryCatagory = "select * from catagory where catagoryName like '%".$searchValue."%' limit 10";
        $data["catagorySearch"] = $this->M_data->load_query($queryCatagory);

        echo json_encode($data);
    }
    public function newsDetail($idNews = ""){

        $query = "SELECT news.*, company.companyName, company.companyLink, company.companyLogo FROM news, company WHERE news.IdCompany = company.Id and IdNew = '".$idNews."'";
        $data = $this->M_data->load_query($query);

        $images["images"] = [];
        $link = scandir("public/images/newsImage/".$data[0]["companyLink"]."/".$data[0]["newsImages"]);
        $files = array_diff($link, array('.','..'));
        foreach ($files as $file) {
            $image = $data[0]["companyLink"] ."/". $data[0]["newsImages"] ."/". $file;
            array_push($images["images"], $image);
                
        }
        $mix = array_merge($data[0], $images);
        echo json_encode($mix);

    }
    // ADMIN login

    public function adminLogin(){
        $inforUser = json_decode(file_get_contents("php://input"), true);
        $username = $inforUser["username"];
        $pass = $inforUser["password"];
     
        $query = "SELECT * FROM accountadmin, employee WHERE accountadmin.idEmployeeFK = employee.IdEmployee AND accountadmin.userName = '".$username."' and accountadmin.password = '".$pass."'";
        $data = $this->M_data->load_query($query);
        if(count($data) > 0){
            echo json_encode($data[0]);
            exit();
        }
        echo 1;// tài khoản không tồn tại
    }
    // lấy số luong san pham, tin tuc dang hien thi
    public function getActionInf(){
        $query = "SELECT * FROM (SELECT company.Id as IdCompany, company.companyName, company.companyLink FROM company WHERE company.statusCompany = 0) as allcompnay LEFT JOIN (SELECT company.Id as IdCompanyNews, COUNT(company.Id) as newsQuantum FROM company, news WHERE news.IdCompany = company.Id GROUP BY company.Id) as SLNews ON SLNews.IdCompanyNews = allcompnay.IdCompany LEFT JOIN (SELECT company.Id, COUNT(company.Id) as productQuantum FROM company, products WHERE products.IdCompany = company.Id and products.Hidden = 0 GROUP BY company.Id) as SL ON allcompnay.IdCompany = SL.Id";
        $data = $this->M_data->load_query($query);
        echo json_encode($data);
    }
}