<?php
namespace app\controllers;

use app\models\Developer;
use Yii;
use yii\web\Controller;
use yii\web\Response;

class ExampleController extends Controller
{
    public function actionContributors()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $contributors = [];

        $indeed = new Developer();
        $indeed->name = 'Indeed';
        $indeed->github = 'https://github.com/IndeedPlusPlus';
        $contributors[] = $indeed;

        return $contributors;
    }
}
